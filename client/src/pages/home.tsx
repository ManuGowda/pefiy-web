import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Sparkles, Shield, TrendingUp, Zap, CheckCircle, Menu, X, Mail, Twitter, Github, Linkedin } from "lucide-react";
import heroMockup from "@assets/generated_images/Hero_phone_mockup_interface_9353f421.png";
import dashboardMockup from "@assets/generated_images/Dashboard_analytics_mockup_93dbcd2e.png";
import chatMockup from "@assets/generated_images/Chat_transaction_interface_40e8da2d.png";
import securityVisual from "@assets/generated_images/Security_protection_visual_4655aeb3.png";
import rewardsMockup from "@assets/generated_images/Rewards_perks_interface_3845b533.png";
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

function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-background/80 border-b border-border/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg gradient-purple-blue flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold">Pefiy</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#security" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Security
            </a>
            <a href="#waitlist" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Waitlist
            </a>
            <Button size="default" className="gradient-purple-blue text-white border-0" data-testid="button-join-nav">
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
        </div>
      </div>

      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden border-t border-border/50 bg-background"
        >
          <div className="px-4 py-4 space-y-3">
            <a href="#features" className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#security" className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Security
            </a>
            <a href="#waitlist" className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Waitlist
            </a>
            <Button size="default" className="w-full gradient-purple-blue text-white border-0" data-testid="button-join-mobile">
              Join Waitlist
            </Button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 gradient-radial"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center lg:text-left"
          >
            <motion.h1 
              variants={fadeUpVariants}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
            >
              Intelligent crypto{" "}
              <span className="text-gradient">finance</span>
            </motion.h1>
            
            <motion.p 
              variants={fadeUpVariants}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed"
            >
              Grow your wealth effortlessly with AI-powered crypto. Smart strategies, maximum returns, zero complexity.
            </motion.p>

            <motion.div 
              variants={fadeUpVariants}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button 
                size="lg" 
                className="gradient-purple-blue text-white border-0 text-lg px-8 py-6"
                data-testid="button-join-hero"
              >
                Join Waitlist
                <Sparkles className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="glassmorphism text-lg px-8 py-6"
                data-testid="button-learn-more"
              >
                Learn More
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative z-10">
              <img 
                src={heroMockup} 
                alt="Pefiy app interface" 
                className="w-full max-w-md mx-auto drop-shadow-2xl"
                data-testid="img-hero-mockup"
              />
            </div>
            <div className="absolute inset-0 gradient-purple-blue opacity-20 blur-3xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FeatureSection({ 
  title, 
  description, 
  image, 
  imageAlt, 
  reverse = false,
  icon: Icon
}: { 
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
  icon: any;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={staggerContainer}
      className={`grid lg:grid-cols-2 gap-12 items-center ${reverse ? 'lg:grid-flow-dense' : ''}`}
    >
      <motion.div 
        variants={fadeUpVariants}
        transition={{ duration: 0.6 }}
        className={reverse ? 'lg:col-start-2' : ''}
      >
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl gradient-purple-blue mb-6">
          <Icon className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          {title}
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
          {description}
        </p>
      </motion.div>

      <motion.div
        variants={fadeUpVariants}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={reverse ? 'lg:col-start-1 lg:row-start-1' : ''}
      >
        <Card className="p-4 glassmorphism overflow-hidden">
          <img 
            src={image} 
            alt={imageAlt} 
            className="w-full rounded-xl"
            data-testid={`img-feature-${imageAlt.toLowerCase().replace(/\s+/g, '-')}`}
          />
        </Card>
      </motion.div>
    </motion.div>
  );
}

function FeaturesSection() {
  return (
    <section id="features" className="py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 md:space-y-32">
        <FeatureSection
          icon={TrendingUp}
          title="Earn more from holding your crypto"
          description="Put your tokens to work with AI, so you can maximize profits without doing the heavy lifting. Automated lending strategies constantly shift your crypto into the highest-yield opportunities."
          image={dashboardMockup}
          imageAlt="Dashboard analytics"
        />

        <FeatureSection
          icon={Zap}
          title="Smart transactions with your intelligent wallet"
          description="Perform transactions and manage assets with ease. Just tell your agent what to do, and you're set! Use any token in your wallet to pay network fees, and enjoy free daily transactions."
          image={chatMockup}
          imageAlt="Chat interface"
          reverse
        />

        <FeatureSection
          icon={Shield}
          title="Protect your investments with unrivaled security"
          description="Stay in control with passkeys. Access your account and sign transactions securely. No seed phrases, no phishing, no worries. Real-time warnings stop scams in their tracks."
          image={securityVisual}
          imageAlt="Security protection"
        />

        <FeatureSection
          icon={Sparkles}
          title="Unlock rewards with exclusive perks"
          description="Earn points when you perform transactions, and unlock exclusive perks along the way. Just do your thing, and watch the rewards roll in. Turn your activity into valuable benefits."
          image={rewardsMockup}
          imageAlt="Rewards system"
          reverse
        />
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
          <Card className="p-8 md:p-12 glassmorphism text-center">
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
                    className="flex-1 h-12 px-6 glassmorphism"
                    required
                    data-testid="input-email-waitlist"
                  />
                  <Button 
                    type="submit"
                    size="lg"
                    className="gradient-purple-blue text-white border-0 px-8"
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
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-purple-blue mb-6">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Thank you!</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  You have successfully joined the waitlist. Keep an eye on your inbox for updates.
                </p>
                <Button
                  variant="outline"
                  onClick={() => setIsSubmitted(false)}
                  className="glassmorphism"
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

function Footer() {
  return (
    <footer className="border-t border-border/50 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#features" className="hover:text-foreground transition-colors">Features</a></li>
              <li><a href="#security" className="hover:text-foreground transition-colors">Security</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">About</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Careers</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Community</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Terms</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-border/50">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded gradient-purple-blue flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className="font-semibold">Pefiy</span>
          </div>

          <p className="text-sm text-muted-foreground">
            © 2024 Pefiy. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-twitter">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-github">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-linkedin">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
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
