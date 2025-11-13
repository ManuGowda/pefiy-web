import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Sparkles, Menu, X, Moon, Sun } from "lucide-react";

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [burgerMenuOpen, setBurgerMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    // Check system preference
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    } else {
      const systemTheme = mediaQuery.matches ? 'dark' : 'light';
      setTheme(systemTheme);
      document.documentElement.classList.toggle('dark', systemTheme === 'dark');
    }

    // Listen for system theme changes
    const handleChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem('theme')) {
        const newTheme = e.matches ? 'dark' : 'light';
        setTheme(newTheme);
        document.documentElement.classList.toggle('dark', newTheme === 'dark');
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  const scrollToWaitlist = () => {
    setMobileMenuOpen(false);
    const waitlistElement = document.getElementById('waitlist');
    if (waitlistElement) {
      waitlistElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4"
    >
      <div className="w-[95%] max-w-7xl mx-auto backdrop-blur-xl bg-background/60 border border-border/50 rounded-full shadow-lg">
        <div className="flex items-center justify-between h-14 px-6">
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer" data-testid="link-logo">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">Pefiy</span>
            </div>
          </Link>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-6">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg hover-elevate active-elevate-2"
                aria-label="Toggle theme"
                data-testid="button-theme-toggle"
              >
                {theme === 'dark' ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>
              <Button 
                size="default" 
                variant="default"
                data-testid="button-join-nav"
                onClick={scrollToWaitlist}
              >
                Join Waitlist
              </Button>
            </div>

            <button 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-menu-toggle"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            <div className="relative">
              <button 
                onClick={() => setBurgerMenuOpen(!burgerMenuOpen)}
                className="p-2 rounded-lg hover-elevate active-elevate-2"
                data-testid="button-burger-menu"
              >
                <Menu className="w-5 h-5" />
              </button>

              {burgerMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute right-0 mt-2 w-48 backdrop-blur-xl bg-background/60 border border-border/50 rounded-2xl shadow-lg overflow-hidden"
                >
                  <div className="py-2">
                    <a 
                      href="#about" 
                      className="block px-4 py-3 text-sm hover-elevate active-elevate-2 transition-colors"
                      data-testid="link-about"
                      onClick={() => setBurgerMenuOpen(false)}
                    >
                      About
                    </a>
                    <Link href="/blogs">
                      <div 
                        className="block px-4 py-3 text-sm hover-elevate active-elevate-2 transition-colors cursor-pointer"
                        data-testid="link-blog"
                        onClick={() => setBurgerMenuOpen(false)}
                      >
                        Blog
                      </div>
                    </Link>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-2 backdrop-blur-xl bg-background/60 border border-border/50 rounded-3xl overflow-hidden"
          >
            <div className="px-4 py-4 space-y-3">
            <button
              onClick={toggleTheme}
              className="w-full p-3 rounded-lg hover-elevate active-elevate-2 flex items-center justify-center gap-2"
              data-testid="button-theme-toggle-mobile"
            >
              {theme === 'dark' ? (
                <>
                  <Sun className="w-5 h-5" />
                  <span className="text-sm font-medium">Light Mode</span>
                </>
              ) : (
                <>
                  <Moon className="w-5 h-5" />
                  <span className="text-sm font-medium">Dark Mode</span>
                </>
              )}
            </button>
            <Button 
              size="default" 
              variant="default"
              className="w-full" 
              data-testid="button-join-mobile"
              onClick={scrollToWaitlist}
            >
              Join Waitlist
            </Button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
