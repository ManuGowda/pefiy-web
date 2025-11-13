import { motion } from "framer-motion";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Sparkles, Target, Users, Zap } from "lucide-react";

const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

export default function About() {
  return (
    <div className="relative">
      <Navigation />
      
      <div className="min-h-screen pt-24 px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.h1 
              variants={fadeUpVariants}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              About Pefiy
            </motion.h1>

            <motion.p 
              variants={fadeUpVariants}
              className="text-lg text-muted-foreground mb-12"
            >
              We're transforming remittances into strategic crypto investments through AI-powered finance tools.
            </motion.p>

            <motion.div 
              variants={fadeUpVariants}
              className="mb-16"
            >
              <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                Pefiy exists to democratize access to sophisticated financial tools and crypto investments. 
                We believe that everyone deserves the opportunity to grow their wealth intelligently, 
                regardless of their financial background or geographic location.
              </p>
            </motion.div>

            <motion.div 
              variants={staggerContainer}
              className="grid md:grid-cols-3 gap-8 mb-16"
            >
              <motion.div variants={fadeUpVariants}>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
                <p className="text-muted-foreground">
                  To become the leading platform for intelligent crypto investments, making financial growth accessible to everyone.
                </p>
              </motion.div>

              <motion.div variants={fadeUpVariants}>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                <p className="text-muted-foreground">
                  We leverage cutting-edge AI technology to provide personalized investment strategies and real-time market insights.
                </p>
              </motion.div>

              <motion.div variants={fadeUpVariants}>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Community</h3>
                <p className="text-muted-foreground">
                  Building a global community of informed investors who support and learn from each other.
                </p>
              </motion.div>
            </motion.div>

            <motion.div variants={fadeUpVariants} className="mb-16">
              <h2 className="text-2xl font-semibold mb-4">Why Choose Pefiy?</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <span className="text-primary font-semibold">AI-Powered Intelligence:</span> Our advanced algorithms analyze market trends in real-time to help you make informed decisions.
                </p>
                <p>
                  <span className="text-primary font-semibold">Seamless Experience:</span> From remittances to investments, we've simplified the entire process into one intuitive platform.
                </p>
                <p>
                  <span className="text-primary font-semibold">Security First:</span> Your assets are protected with bank-level security and industry-leading encryption.
                </p>
                <p>
                  <span className="text-primary font-semibold">Educational Resources:</span> We empower our users with knowledge through comprehensive guides and market analysis.
                </p>
              </div>
            </motion.div>

            <motion.div 
              variants={fadeUpVariants}
              className="border border-border/50 rounded-2xl p-8 bg-card/50"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Join Us on Our Journey</h3>
                  <p className="text-muted-foreground">
                    We're just getting started, and we'd love for you to be part of the Pefiy story. 
                    Join our waitlist today to be among the first to experience the future of financial technology.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
