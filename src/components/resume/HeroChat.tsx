import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, Bot, Sparkles, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}
const quickQuestions = ["What are your main skills?", "Tell me about your experience", "What's your background?"];
export function HeroChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: 'smooth'
    });
  }, [messages]);
  const handleSend = async (text?: string) => {
    const messageText = text || input;
    if (!messageText.trim() || isLoading) return;
    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: messageText
    };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // Placeholder response - will be replaced with RAG when backend is configured
    setTimeout(() => {
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: `Thanks for asking about "${messageText}". This is a placeholder. Scroll down to explore my skills, experience, and education below!`
      };
      setMessages(prev => [...prev, assistantMessage]);
      setIsLoading(false);
    }, 800);
  };
  return <motion.div className="w-full max-w-2xl" initial={{
    opacity: 0,
    y: 20
  }} animate={{
    opacity: 1,
    y: 0
  }} transition={{
    duration: 0.8,
    delay: 0.5,
    ease: [0.25, 0.46, 0.45, 0.94]
  }}>
      <div className="bg-card/80 backdrop-blur-xl border border-border/40 rounded-3xl overflow-hidden shadow-lg">
        {/* Header - refined */}
        <div className="px-5 py-4 flex items-center justify-between border-b border-border/30">
          <div className="flex items-center gap-3">
            <div className="size-8 rounded-xl bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 flex items-center justify-center">
              <Sparkles className="size-4 text-accent-blue" />
            </div>
            <span className="text-sm font-medium text-foreground/80">
              Ask me anything
            </span>
          </div>
        </div>

        {/* Messages Area - refined */}
        <div className="h-48 overflow-y-auto p-5 space-y-3 bg-secondary/10">
          {messages.length === 0 ? <div className="h-full flex flex-col items-center justify-center text-center">
              <div className="size-12 rounded-2xl bg-secondary/50 flex items-center justify-center mb-3">
                <Zap className="size-5 text-muted-foreground/40" />
              </div>
              <p className="text-sm text-muted-foreground/60">
                Ask about my skills, experience, or projects
              </p>
            </div> : <>
              {messages.map(message => <motion.div key={message.id} initial={{
            opacity: 0,
            y: 5
          }} animate={{
            opacity: 1,
            y: 0
          }} className={`flex gap-2.5 ${message.role === 'user' ? 'flex-row-reverse' : ''}`}>
                  {message.role === 'assistant' && <div className="shrink-0 size-7 rounded-xl bg-secondary flex items-center justify-center">
                      <Bot className="size-3.5" />
                    </div>}
                  <div className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm ${message.role === 'user' ? 'bg-foreground text-background' : 'bg-card border border-border/60 shadow-sm'}`}>
                    {message.content}
                  </div>
                </motion.div>)}
              
              {isLoading && <motion.div initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} className="flex gap-2.5">
                  <div className="size-7 rounded-xl bg-secondary flex items-center justify-center">
                    <Bot className="size-3.5" />
                  </div>
                  <div className="bg-card border border-border/60 rounded-2xl px-4 py-2.5 shadow-sm">
                    <div className="flex gap-1.5">
                      <span className="size-1.5 bg-muted-foreground/40 rounded-full animate-bounce" style={{
                  animationDelay: '0ms'
                }} />
                      <span className="size-1.5 bg-muted-foreground/40 rounded-full animate-bounce" style={{
                  animationDelay: '150ms'
                }} />
                      <span className="size-1.5 bg-muted-foreground/40 rounded-full animate-bounce" style={{
                  animationDelay: '300ms'
                }} />
                    </div>
                  </div>
                </motion.div>}
              <div ref={messagesEndRef} />
            </>}
        </div>

        {/* Quick Questions - refined */}
        <div className="px-5 py-3 flex flex-wrap gap-2 border-t border-border/30">
          {quickQuestions.map(question => <button key={question} onClick={() => handleSend(question)} className="px-3.5 py-2 text-xs font-medium rounded-xl bg-secondary/50 border border-border/30 hover:bg-secondary hover:border-border/60 transition-all duration-200">
              {question}
            </button>)}
        </div>

        {/* Input Area - refined */}
        <div className="p-4 border-t border-border/30">
          <form onSubmit={e => {
          e.preventDefault();
          handleSend();
        }} className="flex gap-3">
            <Input value={input} onChange={e => setInput(e.target.value)} placeholder="Ask about skills, experience, projects..." className="flex-1 h-11 rounded-2xl bg-secondary/30 border-border/30 text-sm focus-visible:ring-1 focus-visible:ring-accent-blue/50 focus-visible:border-accent-blue/50" disabled={isLoading} />
            <Button type="submit" size="icon" className="size-11 rounded-2xl shrink-0 bg-foreground hover:bg-foreground/90" disabled={!input.trim() || isLoading}>
              <Send className="size-4" />
            </Button>
          </form>
        </div>
      </div>
    </motion.div>;
}