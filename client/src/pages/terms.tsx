import { Link } from "wouter";
import { useEffect } from "react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Card } from "@/components/ui/card";

export default function Terms() {
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
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">Terms of Service</h1>
            <p className="text-lg text-muted-foreground">Last updated: September 14, 2025</p>
          </div>

          <Card className="p-8 md:p-12 bg-card border-border rounded-3xl space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing or using Pefiy (the “Service”), you agree to be bound by these Terms of Service. If you do not agree with any part of the terms, you may not use the Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Use of the Service</h2>
              <p className="text-muted-foreground leading-relaxed">
                You agree to use the Service only for lawful purposes and in compliance with all applicable laws and regulations. You are responsible for your account and any activity that occurs under it.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">
                All content, features, and functionality of the Service are the exclusive property of Pefiy or its licensors and are protected by copyright, trademark, and other intellectual property laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Disclaimers</h2>
              <p className="text-muted-foreground leading-relaxed">
                The service is provided "as is" and "as available" without warranties of any kind. To the fullest extent permitted by law, Pefiy disclaims all warranties, express or implied.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                In no event will Pefiy be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Changes to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may modify these Terms from time to time. We will post the changes on this page and indicate the date of the latest revision.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have questions about these Terms, please contact us at contact@pefiy.com.
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
