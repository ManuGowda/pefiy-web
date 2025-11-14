import { Link } from "wouter";
import { useEffect } from "react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Card } from "@/components/ui/card";

export default function Privacy() {
  useEffect(() => {
    // Ensure SPA navigation starts at top of page
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, left: 0 });
    }
  }, []);
  return (
    <div className="relative">
      <Navigation />

  <main className="min-h-screen pt-24 pb-16 bg-background">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">Privacy Policy</h1>
            <p className="text-lg text-muted-foreground">Last updated: September 14, 2025</p>
          </div>

          <Card className="p-8 md:p-12 bg-card border-border rounded-3xl space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                At Pefiy, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Information We Collect</h2>
              <h3 className="text-xl font-medium text-muted-foreground mb-2">Personal Information</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We may collect personal information such as your email address when you join our waiting list or contact us.
              </p>
              <h3 className="text-xl font-medium text-muted-foreground mb-2">Usage Data</h3>
              <p className="text-muted-foreground leading-relaxed">
                We may collect information about how you access and use our website, including your IP address, browser type, and pages visited.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. How We Use Your Information</h2>
              <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-2">
                <li>To provide and maintain our services</li>
                <li>To notify you about updates and new features</li>
                <li>To respond to your inquiries and support requests</li>
                <li>To improve our website and services</li>
                <li>To comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Information Sharing</h2>
              <p className="text-muted-foreground leading-relaxed">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy or required by law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You have the right to access, update, or delete your personal information. You may also opt out of marketing communications at any time.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                To exercise these rights, please contact us at privacy@pefiy.com.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Cookies</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may use cookies and similar technologies to enhance your experience on our website. You can control cookie settings through your browser.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Changes to This Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about this Privacy Policy, please write to us at: contact@pefiy.com
              </p>
            </section>
          </Card>

          <div className="text-center mt-12">
            <Link href="/">
              <button className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:brightness-95 transition-all">
                ← Back to Home
              </button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
