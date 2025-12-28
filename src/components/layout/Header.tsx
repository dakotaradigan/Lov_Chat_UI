import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { ThemeToggle } from './ThemeToggle';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { resumeInfo } from '@/data/resume';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Experience', path: '#experience' },
  { name: 'Skills', path: '#skills' },
  { name: 'Education', path: '#education' },
  { name: 'Contact', path: '/contact' },
];

/**
 * Main header component with scroll-aware styling
 * Transparent on hero section, solid when scrolled
 * Mobile responsive with hamburger menu
 */
export function Header() {
  const location = useLocation();
  const { isScrolled } = useScrollPosition();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Header is transparent only on homepage hero when not scrolled
  const isTransparent = location.pathname === '/' && !isScrolled;

  const handleNavClick = (path: string) => {
    if (path === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setMobileMenuOpen(false);
      return;
    }
    if (path.startsWith('#')) {
      const element = document.querySelector(path);
      element?.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
      return;
    }
    setMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isTransparent
          ? 'bg-transparent'
          : 'bg-background/80 backdrop-blur-xl border-b border-border/50'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo - refined */}
          <Link
            to="/"
            className="text-base font-semibold tracking-tight transition-all duration-200 text-foreground hover:text-foreground/70"
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-2"
            >
              <span className="size-2 rounded-full bg-accent-blue" />
              {resumeInfo.name}
            </motion.span>
          </Link>

          {/* Desktop Navigation - refined */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                >
                  {link.path.startsWith('#') || link.path === '/' ? (
                    <button
                      onClick={() => handleNavClick(link.path)}
                      className="relative px-4 py-2 text-sm font-medium text-muted-foreground transition-colors duration-200 hover:text-foreground rounded-lg hover:bg-secondary/50"
                    >
                      {link.name}
                    </button>
                  ) : (
                    <Link
                      to={link.path}
                      className={cn(
                        "relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-lg hover:bg-secondary/50",
                        location.pathname === link.path
                          ? 'text-foreground bg-secondary/50'
                          : 'text-muted-foreground hover:text-foreground'
                      )}
                    >
                      {link.name}
                    </Link>
                  )}
                </motion.div>
              ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="ml-2"
            >
              <ThemeToggle />
            </motion.div>
          </nav>

          {/* Mobile Menu - refined */}
          <div className="md:hidden flex items-center gap-1">
            <ThemeToggle />
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="size-9 rounded-xl"
                  aria-label="Open menu"
                >
                  <Menu className="size-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-80 bg-background/95 backdrop-blur-xl">
                <nav className="flex flex-col gap-2 mt-8">
                  {navLinks.map((link) => (
                    link.path.startsWith('#') || link.path === '/' ? (
                      <button
                        key={link.path}
                        onClick={() => handleNavClick(link.path)}
                        className="text-base font-medium text-foreground hover:text-foreground/70 text-left px-4 py-3 rounded-xl hover:bg-secondary/50 transition-colors"
                      >
                        {link.name}
                      </button>
                    ) : (
                      <Link
                        key={link.path}
                        to={link.path}
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-base font-medium text-foreground hover:text-foreground/70 px-4 py-3 rounded-xl hover:bg-secondary/50 transition-colors"
                      >
                        {link.name}
                      </Link>
                    )
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
