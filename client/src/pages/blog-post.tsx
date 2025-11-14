import { motion } from "framer-motion";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { useRoute } from "wouter";

const blogContent: Record<string, any> = {
  "intelligent-wallet": {
    date: "MAY 7, 2025",
    category: "INDUSTRY",
    tags: ["PEFIY NEWS"],
    title: "Meet the First Intelligent Wallet",
    content: `
      <p>The industry's first intelligent wallet is here: introducing an AI-powered experience that redefines how you interact with web3. Unlike traditional or even smart contract wallets, Pefiy's intelligent wallet is designed to respond to chat-based prompts, understand context, and evolve with you, all while maintaining full control and security.</p>
      
      <h2>What Makes It Intelligent?</h2>
      <p>Our wallet leverages advanced AI technology to understand your financial goals and help you make smarter decisions. It's not just about storing crypto—it's about growing your wealth intelligently.</p>
      
      <h2>Key Features</h2>
      <ul>
        <li>Chat-based interaction for seamless transactions</li>
        <li>Context-aware suggestions and insights</li>
        <li>Enhanced security with AI-powered fraud detection</li>
        <li>Personalized investment recommendations</li>
      </ul>
      
      <p>This is just the beginning. Join our waitlist to be among the first to experience the future of intelligent wallets.</p>
    `
  },
  "rewards-program": {
    date: "APRIL 15, 2025",
    category: "FEATURES",
    tags: ["REWARDS"],
    title: "The Pefiy Rewards Program is Now Live",
    content: `
      <p>We're excited to announce the launch of our new rewards program, designed to give you even more value for using Pefiy.</p>
      
      <h2>What's New?</h2>
      <p>Our rewards program allows you to earn points on every transaction, which can be redeemed for premium features, higher APY rates, and exclusive benefits.</p>
      
      <h2>How It Works</h2>
      <ul>
        <li>Earn 1 point for every dollar transferred</li>
        <li>Get bonus points for maintaining higher balances</li>
        <li>Redeem points for premium features and perks</li>
        <li>Enjoy exclusive early access to new features</li>
      </ul>
      
      <p>This is just the beginning. Stay tuned for more updates as we continue to enhance the Pefiy experience.</p>
    `
  },
  "crypto-investments-beginners": {
    date: "MARCH 22, 2025",
    category: "EDUCATION",
    tags: ["CRYPTO"],
    title: "Understanding Crypto Investments for Beginners",
    content: `
      <p>New to crypto? This comprehensive guide breaks down everything you need to know about cryptocurrency investments, from basic concepts to advanced strategies.</p>
      
      <h2>Getting Started</h2>
      <p>Cryptocurrency can seem intimidating at first, but with the right knowledge and tools, anyone can become a confident investor. Let's start with the basics.</p>
      
      <h2>Key Concepts</h2>
      <ul>
        <li>Understanding blockchain technology</li>
        <li>Different types of cryptocurrencies</li>
        <li>How to evaluate investment opportunities</li>
        <li>Risk management strategies</li>
      </ul>
      
      <h2>Best Practices</h2>
      <p>Always do your research, diversify your portfolio, and never invest more than you can afford to lose. With Pefiy's AI-powered tools, you'll have the insights you need to make informed decisions.</p>
    `
  },
  "stable-coins-explained": {
    date: "MARCH 22, 2025",
    category: "EDUCATION",
    tags: ["CRYPTO"],
    title: "Understanding Stable Coins for Beginners",
    content: `
      <p>New to crypto? This comprehensive guide breaks down everything you need to know about stable coins, from basic concepts to advanced strategies.</p>
      
      <h2>Getting Started</h2>
      <p>Stable coins can seem intimidating at first, but with the right knowledge and tools, anyone can become a confident investor. Let's start with the basics.</p>
      
      <h2>Key Concepts</h2>
      <ul>
        <li>Understanding blockchain technology</li>
        <li>Different types of stable coins</li>
        <li>How to evaluate investment opportunities</li>
        <li>Risk management strategies</li>
      </ul>
      
      <h2>Best Practices</h2>
      <p>Always do your research, diversify your portfolio, and never invest more than you can afford to lose. With Pefiy's AI-powered tools, you'll have the insights you need to make informed decisions.</p>
    `
  }
};

export default function BlogPost() {
  const [, params] = useRoute("/blog/:slug");
  const slug = params?.slug || "";
  const post = blogContent[slug];

  if (!post) {
    return (
      <div className="relative">
        <Navigation />
        <div className="min-h-screen pt-24 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
            <p className="text-muted-foreground">The blog post you're looking for doesn't exist.</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="relative">
      <Navigation />
      
      <div className="min-h-screen pt-24 px-4 sm:px-6 lg:px-8 pb-16">
        <article className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <span className="text-sm font-semibold text-muted-foreground">
                {post.date}
              </span>
              <Badge variant="secondary" className="text-xs">
                {post.category}
              </Badge>
              {post.tags.map((tag: string, idx: number) => (
                <Badge key={idx} variant="outline" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-8">
              {post.title}
            </h1>

            <div 
              className="prose dark:prose-invert max-w-none prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-p:text-muted-foreground prose-p:leading-relaxed prose-ul:text-muted-foreground"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </motion.div>
        </article>
      </div>

      <Footer />
    </div>
  );
}
