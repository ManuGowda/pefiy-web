import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect, useMemo } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Sparkles, Shield, TrendingUp, Zap, CheckCircle, ArrowRight } from "lucide-react";
import heroImage from "@assets/landing page_1763055675446.png";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { insertWaitlistSchema } from "@shared/schema";

const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

function TypewriterText() {
  const words = useMemo(() => ['money', 'learn', 'community'], []);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseAfterComplete = 2000;
    const pauseAfterDelete = 500;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (currentText.length < currentWord.length) {
          setCurrentText(currentWord.slice(0, currentText.length + 1));
        } else {
          // Word complete, pause then start deleting
          setTimeout(() => setIsDeleting(true), pauseAfterComplete);
        }
      } else {
        // Deleting
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          // Deleted complete, move to next word
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? typingSpeed : (currentText.length === currentWord.length ? pauseAfterComplete : typingSpeed));

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words]);

  return (
    <span className="inline-block min-w-[200px] text-left text-primary">
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 bg-background"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row gap-12 items-center">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex-1 w-full text-center lg:text-left"
          >
            <motion.div
              variants={fadeUpVariants}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <Link href="/blogs">
                <a className="inline-flex items-center gap-2 text-sm hover-elevate active-elevate-2 px-4 py-2 rounded-full border border-border/50 transition-all group">
                  <span className="font-semibold text-primary">News</span>
                  <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                    The Pefiy rewards program is now live
                  </span>
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all" />
                </a>
              </Link>
            </motion.div>

            <motion.h1 
              variants={fadeUpVariants}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
            >
              Speed up your <TypewriterText />
            </motion.h1>
            
            <motion.p 
              variants={fadeUpVariants}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed"
            >
              Up to 3x more of what any bank gives you.
            </motion.p>

            <motion.div 
              variants={fadeUpVariants}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-6"
            >
              <Button 
                size="lg" 
                variant="default"
                data-testid="button-join-hero"
                onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Join Waitlist
                <Sparkles className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>

            <motion.p
              variants={fadeUpVariants}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-sm text-muted-foreground"
              data-testid="text-social-proof"
            >
              Join 20,000+ people using Pefiy
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex-1 w-full relative"
          >
            <div className="relative z-10">
              <img 
                src={heroImage} 
                alt="3D character viewing financial charts and analytics" 
                className="w-full max-w-2xl mx-auto lg:ml-auto lg:mr-0 opacity-90 dark:opacity-80 mix-blend-luminosity dark:mix-blend-normal rounded-2xl"
                data-testid="img-hero-mockup"
              />
            </div>
            <div className="absolute inset-0 bg-primary/3 blur-3xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: TrendingUp,
      title: "Save at +11% APY speed.",
      description: "The highest APYs on USDC, EURC and even BTC",
      testId: "card-feature-save"
    },
    {
      icon: Zap,
      title: "Spend while you earn.",
      description: "No fees. Accepted worldwide.",
      testId: "card-feature-spend"
    },
    {
      icon: Shield,
      title: "Trade +15,000 tokens.",
      description: "Lowest fees. Across 5 networks.",
      testId: "card-feature-trade"
    },
    {
      icon: Sparkles,
      title: "Free global transfers.",
      description: "Your own account. Multiple currencies.",
      testId: "card-feature-transfer"
    }
  ];

  return (
    <section id="features" className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeUpVariants}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-6 bg-card border-border h-full" data-testid={feature.testId}>
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary mb-4">
                  <feature.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function WaitlistSection() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const joinWaitlistMutation = useMutation({
    mutationFn: async (data: { email: string }) => {
      const validated = insertWaitlistSchema.parse(data);
      return await apiRequest("POST", "/api/waitlist", validated);
    },
    onSuccess: () => {
      setIsSubmitted(true);
      setEmail("");
      toast({
        title: "Welcome to the waitlist!",
        description: "Keep an eye on your inbox for updates. We can't wait to welcome you.",
      });
    },
    onError: (error: any) => {
      toast({
        title: "Something went wrong",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      joinWaitlistMutation.mutate({ email });
    }
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="waitlist" className="py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="max-w-4xl mx-auto"
        >
          <Card className="p-8 md:p-12 bg-card border-border text-center">
            {!isSubmitted ? (
              <>
                <motion.div variants={fadeUpVariants} transition={{ duration: 0.6 }}>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                    Make your next move
                  </h2>
                  <p className="text-lg md:text-xl text-muted-foreground mb-8">
                    Enter your email to join the waitlist and stay ahead of the curve with our newsletter.
                  </p>
                </motion.div>

                <motion.form 
                  variants={fadeUpVariants}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  onSubmit={handleSubmit}
                  className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
                >
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 bg-input border-border"
                    required
                    data-testid="input-email-waitlist"
                  />
                  <Button 
                    type="submit"
                    size="lg"
                    variant="default"
                    disabled={joinWaitlistMutation.isPending}
                    data-testid="button-submit-waitlist"
                  >
                    {joinWaitlistMutation.isPending ? "Joining..." : "Join the waitlist"}
                  </Button>
                </motion.form>

                <motion.p 
                  variants={fadeUpVariants}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-sm text-muted-foreground mt-4"
                >
                  No spam, ever. Unsubscribe at any time.
                </motion.p>
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary mb-6">
                  <CheckCircle className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Thank you!</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  You have successfully joined the waitlist. Keep an eye on your inbox for updates.
                </p>
                <Button
                  variant="outline"
                  onClick={() => setIsSubmitted(false)}
                  className="bg-input border-border"
                  data-testid="button-close-success"
                >
                  Close and explore
                </Button>
              </motion.div>
            )}
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="relative">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <WaitlistSection />
      <Footer />
    </div>
  );
}
