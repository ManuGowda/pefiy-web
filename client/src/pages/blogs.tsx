import { motion } from "framer-motion";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";

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

const blogPosts = [
  {
    date: "MAY 7, 2025",
    category: "INDUSTRY",
    tags: ["PEFIY NEWS"],
    title: "Meet the First Intelligent Wallet",
    description: "The industry's first intelligent wallet is here: introducing an AI-powered experience that redefines how you interact with web3. Unlike traditional or even smart contract wallets, Pefiy's intelligent wallet is designed to respond to chat-based prompts, understand context, and evolve with you, all while maintaining full control and security.",
  },
  {
    date: "APRIL 15, 2025",
    category: "FEATURES",
    tags: ["REWARDS"],
    title: "The Pefiy Rewards Program is Now Live",
    description: "We're excited to announce the launch of our new rewards program, designed to give you even more value for using Pefiy. Earn points on every transaction, which can be redeemed for premium features, higher APY rates, and exclusive benefits.",
  },
  {
    date: "MARCH 22, 2025",
    category: "EDUCATION",
    tags: ["CRYPTO"],
    title: "Understanding Crypto Investments for Beginners",
    description: "New to crypto? This comprehensive guide breaks down everything you need to know about cryptocurrency investments, from basic concepts to advanced strategies. Learn how to navigate the market with confidence and make informed decisions.",
  }
];

export default function Blogs() {
  return (
    <div className="relative">
      <Navigation />
      
      <div className="min-h-screen pt-24 pb-16">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="px-4 sm:px-6 lg:px-8 py-16 text-center"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            The latest news from Pefiy
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore exciting new features, partnerships, web3 market trends, and more on the Pefiy blog.
          </p>
        </motion.div>

        {/* Blog Posts */}
        <div className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-8"
          >
            {blogPosts.map((post, index) => (
              <motion.article
                key={index}
                variants={fadeUpVariants}
                className="border border-border/50 rounded-3xl p-8 md:p-12 hover-elevate active-elevate-2 cursor-pointer transition-all"
                data-testid={`blog-card-${index}`}
              >
                <div className="flex flex-col lg:flex-row gap-8 items-start">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <span className="text-xs font-semibold text-muted-foreground">
                        {post.date}
                      </span>
                      <Badge variant="secondary" className="text-xs">
                        {post.category}
                      </Badge>
                      {post.tags.map((tag, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
                      {post.title}
                    </h2>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {post.description}
                    </p>
                  </div>
                  
                  <div className="lg:w-80 flex-shrink-0">
                    <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border border-border/50">
                      <Sparkles className="w-16 h-16 text-primary" />
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
