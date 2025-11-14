import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect, useMemo } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import RotatingBanner from "@/components/rotating-banner";
import { Sparkles, Shield, TrendingUp, Zap, CheckCircle, ArrowRight, BookOpen } from "lucide-react";
import heroImage from "@assets/landing_page.png";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";

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
  // Attribute-only typewriter (used after the static "Invest with")
  const attributes = useMemo(() => ['clarity', 'insight', 'context', 'guidance', 'direction', 'connection'], []);

  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const current = attributes[index];
    const typingSpeed = 60; // faster typing
    const deletingSpeed = 30; // faster deleting
    const pauseAfterComplete = 700; // shorter pause

    let timer: number | undefined;

    if (isTyping) {
      if (text.length < current.length) {
        timer = window.setTimeout(() => setText(current.slice(0, text.length + 1)), typingSpeed);
      } else {
        timer = window.setTimeout(() => setIsTyping(false), pauseAfterComplete);
      }
    } else {
      if (text.length > 0) {
        timer = window.setTimeout(() => setText(text.slice(0, -1)), deletingSpeed);
      } else {
        setIndex((i) => (i + 1) % attributes.length);
        setIsTyping(true);
      }
    }

    return () => window.clearTimeout(timer);
  }, [index, text, isTyping, attributes]);

  return (
    <span className="inline-block font-semibold min-w-[160px] relative">
      <span 
        className="inline-block bg-gradient-to-r from-primary via-pefiy-blue-500 to-primary bg-clip-text text-transparent"
        style={{
          backgroundSize: '200% 100%',
          animation: 'shimmer 3s ease-in-out infinite',
          filter: 'drop-shadow(0 2px 4px rgba(29, 78, 216, 0.3)) drop-shadow(0 0 8px rgba(59, 130, 246, 0.2))',
          textShadow: '0 0 20px rgba(59, 130, 246, 0.3)',
        }}
      >
        {text}
      </span>
      <span 
        className="animate-pulse inline-block w-[3px] h-[0.9em] ml-2 align-middle rounded-full"
        style={{
          background: 'linear-gradient(to bottom, hsl(var(--primary)), #3b82f6)',
          boxShadow: '0 0 4px rgba(59, 130, 246, 0.6)',
        }}
      ></span>
    </span>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-8">
      <div className="absolute inset-0 bg-background"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-16 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row gap-12 items-stretch">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex-1 w-full text-center lg:text-left flex flex-col justify-center h-full lg:max-w-[640px] lg:pr-12"
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
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4 leading-tight"
            >
              <span className="block">Invest with</span>
              {/* Reserve the second line height so typing doesn't push content */}
              <span className="block mt-2">
                <TypewriterText />
              </span>
            </motion.h1>

            <motion.div
              variants={fadeUpVariants}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <p className="text-lg md:text-xl font-semibold text-foreground">Want investing to finally make sense?</p>

              <p className="mt-3 text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
                Build a <span className="font-semibold text-foreground">deeper understanding of money</span> — from macro
                trends to a practical, personalized plan you can act on. Learn at your own pace and invest with confidence with Pefiy.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 bg-card/60 border border-border px-4 py-2 rounded-full text-sm">
                  <BookOpen className="w-4 h-4 text-primary" />
                  Curated lessons
                </span>
                <span className="inline-flex items-center gap-2 bg-card/60 border border-border px-4 py-2 rounded-full text-sm">
                  <TrendingUp className="w-4 h-4 text-primary" />
                  Real-world examples
                </span>
                <span className="inline-flex items-center gap-2 bg-card/60 border border-border px-4 py-2 rounded-full text-sm">
                  <Shield className="w-4 h-4 text-primary" />
                  Safety-first approach
                </span>
              </div>
            </motion.div>

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
                Start your journey
                <Sparkles className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>

            {/* <motion.p
              variants={fadeUpVariants}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-sm text-muted-foreground"
              data-testid="text-social-proof"
            >
              Join 20,000+ people using Pefiy
            </motion.p> */}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex-1 w-full relative h-full"
          >
            {/* Wrapper ensures rounded (curvy) edges and hides overflow. Use full height so both columns match. */}
            <div className="relative z-10 overflow-hidden rounded-3xl mx-auto max-w-2xl lg:ml-auto lg:mr-0 h-full">
              <img
                src={heroImage}
                alt="3D character viewing financial charts and analytics"
                className="w-full h-full object-cover opacity-90 dark:opacity-80 mix-blend-luminosity dark:mix-blend-normal"
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
        <div className="relative">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 opacity-60 blur-sm pointer-events-none select-none"
            aria-hidden="true"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeUpVariants}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 bg-card/80 border border-dashed border-border/70 h-full shadow-inner shadow-black/10">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/70 mb-4 brightness-90">
                    <feature.icon className="w-5 h-5 text-primary-foreground/90" />
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

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 backdrop-blur-[2px] bg-background/60 rounded-3xl">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary font-semibold uppercase tracking-[0.2em] text-xs">
              coming soon
              <Sparkles className="w-4 h-4" />
            </div>
            <p className="mt-6 text-lg md:text-xl font-semibold text-foreground">
              We&apos;re polishing something special. Features will unlock soon. <br /> Join the waitlist to be among the first to experience it.
            </p>
          </div>
        </div>
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
      const res = await fetch("https://api.pefiy.com/api/v1/waiting-list", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        let message = "Failed to join the list, contact: contact@pefiy.com";
        try {
          const errData = await res.json();
          message = errData.message || message;
        } catch {
          // ignore JSON parse errors
        }
        const error = new Error(message);
        (error as any).status = res.status;
        throw error;
      }

      return res.json();
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
        description: error?.message || "Please try again later.",
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

  // Don’t waste your time juggling dashboards and second-guessing trades
  // Meet Hopper your crypto insider built to front-run chaos and make life easy.

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
                    Meet Pefiy
                    <Sparkles className="ml-2 inline-block align-middle w-10 h-10 text-primary" aria-hidden="true" />
                  </h2>
                  
                  <p className="text-lg md:text-xl text-muted-foreground mb-8">
                    Your true financial companion. Invest smarter with insight, and grow with confidence.
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
                  onClick={() => (window.location.href = "/blogs")}
                  className="bg-input border-border"
                  data-testid="button-close-success"
                >
                  Want to know more about Pefiy?
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
      <RotatingBanner />
      <HeroSection />
      <FeaturesSection />
      <WaitlistSection />
      <Footer />
    </div>
  );
}
