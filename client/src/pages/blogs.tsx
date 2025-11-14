import { motion } from "framer-motion";
import { Link } from "wouter";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
    slug: "intelligent-wallet",
    date: "MAY 7, 2025",
    category: "INDUSTRY",
    tags: ["PEFIY NEWS"],
    title: "Meet the First Intelligent Wallet",
    description: "The industry's first intelligent wallet is here: introducing an AI-powered experience that redefines how you interact with web3. Unlike traditional or even smart contract wallets, Pefiy's intelligent wallet is designed to respond to chat-based prompts, understand context, and evolve with you, all while maintaining full control and security.",
  },
  {
    slug: "rewards-program",
    date: "APRIL 15, 2025",
    category: "FEATURES",
    tags: ["REWARDS"],
    title: "The Pefiy Rewards Program is Now Live",
    description: "We're excited to announce the launch of our new rewards program, designed to give you even more value for using Pefiy. Earn points on every transaction, which can be redeemed for premium features, higher APY rates, and exclusive benefits.",
  },
  {
    slug: "crypto-investments-beginners",
    date: "MARCH 22, 2025",
    category: "EDUCATION",
    tags: ["CRYPTO"],
    title: "Understanding Crypto Investments for Beginners",
    description: "New to crypto? This comprehensive guide breaks down everything you need to know about cryptocurrency investments, from basic concepts to advanced strategies. Learn how to navigate the market with confidence and make informed decisions.",
  },
  {
    slug: "stable-coins-explained",
    date: "MARCH 22, 2025",
    category: "EDUCATION",
    tags: ["CRYPTO"],
    title: "Understanding Stable Coins for Beginners",
    description: "New to crypto? This comprehensive guide breaks down everything you need to know about stable coins, from basic concepts to advanced strategies. Learn how to navigate the market with confidence and make informed decisions.The industry's first intelligent wallet is here: introducing an AI-powered experience that redefines how you interact with web3. Unlike traditional or even smart contract wallets, Pefiy's intelligent wallet is designed to respond to chat-based prompts, understand context, and evolve with you, all while maintaining full control and security.",
  }
];

function truncate(text: string, max = 160) {
  if (!text) return "";
  return text.length > max ? text.slice(0, max).trimEnd() + "…" : text;
}

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

        {/* Blog Posts grid */}
        <div className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 gap-8"
          >
            {blogPosts.map((post, index) => (
              <Link key={index} href={`/blog/${post.slug}`} className="block">
                <motion.article
                  variants={fadeUpVariants}
                  className="block border border-border/50 rounded-3xl p-8 md:p-12 hover-elevate active-elevate-2 cursor-pointer transition-all"
                  data-testid={`blog-card-${index}`}
                >
                  <div className="flex flex-col gap-6 h-full">
                    <div>
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

                      <h2 className="text-2xl md:text-3xl font-bold mb-3 text-primary">
                        {post.title}
                      </h2>

                      <p
                        className="text-muted-foreground leading-relaxed"
                        title={post.description}
                      >
                        {truncate(post.description, 160)}
                      </p>
                    </div>

                    {/* <div className="mt-auto lg:mt-6">
                      <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border border-border/50">
                        <Sparkles className="w-12 h-12 text-primary" />
                      </div>
                    </div> */}
                  </div>
                </motion.article>
              </Link>
            ))}
          </motion.div>

          {/* Widgets (blogs related) below posts */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-border/50 rounded-2xl p-6 bg-card">
              <h3 className="text-lg font-semibold mb-2">Stay updated</h3>
              <p className="text-sm text-muted-foreground mb-4">Join our waitlist to receive release notes and product updates.</p>
              <div className="flex">
                <Button
                  size="default"
                  variant="default"
                  onClick={() => {
                    if (window.location.pathname === '/') {
                      const el = document.getElementById('waitlist');
                      if (el) { el.scrollIntoView({ behavior: 'smooth' }); return; }
                    }
                    window.location.href = '/#waitlist';
                  }}
                >
                  Request Access
                </Button>
              </div>
            </div>

            <div className="border border-border/50 rounded-2xl p-6 bg-card">
              <h3 className="text-lg font-semibold mb-3">Popular Tags</h3>
              <div className="flex flex-wrap gap-2">
                {Array.from(new Set(blogPosts.flatMap(p => p.tags))).map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
