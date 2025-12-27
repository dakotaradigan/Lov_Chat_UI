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
    delay: 0.5
  }}>
      <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl overflow-hidden">
        {/* Header */}
        <div className="px-4 py-3 flex items-center justify-between border-b border-border/50">
          <div className="flex items-center gap-2">
            <div className="size-6 rounded-full bg-primary/10 flex items-center justify-center">
              <Sparkles className="size-3 text-primary" />
            </div>
            <span className="text-sm font-light text-muted-foreground">
              Ask me anything about my background
            </span>
          </div>
        </div>

        {/* Messages Area - always visible with minimum height */}
        <div className="h-48 overflow-y-auto p-4 space-y-3 bg-secondary/20">
          {messages.length === 0 ? <div className="h-full flex flex-col items-center justify-center text-center">
              <Zap className="size-8 text-muted-foreground/40 mb-2 rounded-none opacity-100 shadow-none" />
              <p className="text-sm text-muted-foreground/60 font-light">
                Ask me about my skills, experience, or projects
              </p>
            </div> : <>
              {messages.map(message => <motion.div key={message.id} initial={{
            opacity: 0,
            y: 5
          }} animate={{
            opacity: 1,
            y: 0
          }} className={`flex gap-2 ${message.role === 'user' ? 'flex-row-reverse' : ''}`}>
                  {message.role === 'assistant' && <div className="shrink-0 size-6 rounded-full bg-secondary flex items-center justify-center">
                      <Bot className="size-3" />
                    </div>}
                  <div className={`max-w-[85%] rounded-xl px-3 py-2 text-sm font-light ${message.role === 'user' ? 'bg-primary text-primary-foreground' : 'bg-background border border-border'}`}>
                    {message.content}
                  </div>
                </motion.div>)}
              
              {isLoading && <motion.div initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} className="flex gap-2">
                  <div className="size-6 rounded-full bg-secondary flex items-center justify-center">
                    <Bot className="size-3" />
                  </div>
                  <div className="bg-background border border-border rounded-xl px-3 py-2">
                    <div className="flex gap-1">
                      <span className="size-1.5 bg-muted-foreground/50 rounded-full animate-bounce" style={{
                  animationDelay: '0ms'
                }} />
                      <span className="size-1.5 bg-muted-foreground/50 rounded-full animate-bounce" style={{
                  animationDelay: '150ms'
                }} />
                      <span className="size-1.5 bg-muted-foreground/50 rounded-full animate-bounce" style={{
                  animationDelay: '300ms'
                }} />
                    </div>
                  </div>
                </motion.div>}
              <div ref={messagesEndRef} />
            </>}
        </div>

        {/* Quick Questions */}
        <div className="px-4 py-2 flex flex-wrap gap-2 border-t border-border/50">
          {quickQuestions.map(question => <button key={question} onClick={() => handleSend(question)} className="px-3 py-1.5 text-xs font-light rounded-full bg-background border border-border/50 hover:bg-secondary hover:border-border transition-colors">
              {question}
            </button>)}
        </div>

        {/* Input Area */}
        <div className="p-3 border-t border-border/50">
          <form onSubmit={e => {
          e.preventDefault();
          handleSend();
        }} className="flex gap-2">
            <Input value={input} onChange={e => setInput(e.target.value)} placeholder="Ask about skills, experience, projects..." className="flex-1 h-9 rounded-full bg-secondary/50 border-0 text-sm focus-visible:ring-1" disabled={isLoading} />
            <Button type="submit" size="icon" className="size-9 rounded-full shrink-0" disabled={!input.trim() || isLoading}>
              <Send className="size-3.5" />
            </Button>
          </form>
        </div>
      </div>
    </motion.div>;
}