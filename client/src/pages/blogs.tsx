import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Blogs() {
  return (
    <div className="min-h-screen pt-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link href="/">
            <Button variant="ghost" className="mb-8 -ml-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            The Pefiy Rewards Program is Now Live
          </h1>

          <div className="prose dark:prose-invert max-w-none">
            <p className="text-lg text-muted-foreground mb-6">
              We're excited to announce the launch of our new rewards program, designed to give you even more value for using Pefiy.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">What's New?</h2>
            <p className="text-muted-foreground mb-4">
              Our rewards program allows you to earn points on every transaction, which can be redeemed for premium features, higher APY rates, and exclusive benefits.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">How It Works</h2>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
              <li>Earn 1 point for every dollar transferred</li>
              <li>Get bonus points for maintaining higher balances</li>
              <li>Redeem points for premium features and perks</li>
              <li>Enjoy exclusive early access to new features</li>
            </ul>

            <p className="text-muted-foreground">
              This is just the beginning. Stay tuned for more updates as we continue to enhance the Pefiy experience.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
