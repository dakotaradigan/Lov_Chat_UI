import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Share2, Linkedin, Mail, Link, X, MessageSquare } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

export function ShareButton() {
  const [isOpen, setIsOpen] = useState(false);
  
  const pageUrl = typeof window !== 'undefined' ? window.location.href : '';
  const pageTitle = 'Dakota Radigan - Senior Product Manager';
  
  const shareOptions = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      action: () => {
        const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(pageUrl)}`;
        window.open(url, '_blank', 'width=600,height=400');
      },
    },
    {
      name: 'Email',
      icon: Mail,
      action: () => {
        const subject = encodeURIComponent(`Check out ${pageTitle}`);
        const body = encodeURIComponent(`I wanted to share this with you:\n\n${pageUrl}`);
        window.location.href = `mailto:?subject=${subject}&body=${body}`;
      },
    },
    {
      name: 'Slack',
      icon: MessageSquare,
      action: () => {
        navigator.clipboard.writeText(pageUrl);
        toast({
          title: 'Link copied!',
          description: 'Paste it in Slack to share.',
        });
      },
    },
    {
      name: 'Copy Link',
      icon: Link,
      action: () => {
        navigator.clipboard.writeText(pageUrl);
        toast({
          title: 'Link copied!',
          description: 'The link has been copied to your clipboard.',
        });
      },
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-16 right-0 bg-background border border-border rounded-xl shadow-lg overflow-hidden"
          >
            {shareOptions.map((option, index) => (
              <motion.button
                key={option.name}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => {
                  option.action();
                  if (option.name !== 'Copy Link' && option.name !== 'Slack') {
                    setIsOpen(false);
                  }
                }}
                className="flex items-center gap-3 px-4 py-3 w-full hover:bg-secondary/50 transition-colors text-left"
              >
                <option.icon className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm font-light">{option.name}</span>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <X className="w-5 h-5" />
            </motion.div>
          ) : (
            <motion.div
              key="share"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <Share2 className="w-5 h-5" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}