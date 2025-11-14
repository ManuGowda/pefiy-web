import React, { useEffect, useRef, useState } from "react";
import { Sparkles } from "lucide-react";

type RotatingBannerProps = {
  messages?: string[];
  intervalMs?: number;
};

export default function RotatingBanner({
  messages = ["NOW IN CLOSED ALPHA"],
  intervalMs = 3000,
}: RotatingBannerProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [navOffset, setNavOffset] = useState<number>(0);
  const [isPaused, setIsPaused] = useState(false);

  // measure nav height to offset fixed header
  useEffect(() => {
    function updateOffset() {
      const nav = document.querySelector('nav');
      if (nav instanceof HTMLElement) {
        const h = nav.getBoundingClientRect().height || 0;
        setNavOffset(h);
      }
    }

    updateOffset();
    window.addEventListener('resize', updateOffset);
    return () => window.removeEventListener('resize', updateOffset);
  }, []);

  // Build the repeated content to fill the track. We'll repeat the message several times and insert the icon between each.
  const repeatedCount = 10;
  // Build an interleaved sequence: [msg, icon, msg, icon, ...]
  const repeatedNodes: React.ReactNode[] = [];
  for (let i = 0; i < repeatedCount; i++) {
    repeatedNodes.push(
      <span key={`m-${i}`} className="text-sm font-semibold text-primary">
        {messages[0]}
      </span>
    );
    // insert icon between messages
    repeatedNodes.push(
      <Sparkles key={`s-${i}`} className="w-4 h-4 text-primary inline-block mx-2" aria-hidden />
    );
  }

  // CSS animation duration — longer for slower scroll. 20s default.
  const duration = 60;

  return (
    <div
      className="w-full bg-primary/5 border-t border-primary/10"
      style={navOffset ? { marginTop: navOffset + 12 } : undefined}
    >
      <div
        ref={containerRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        role="status"
        aria-live="polite"
      >
        <div className="flex items-center gap-4">
          <div className="relative flex-1">
            {/* Two identical tracks for seamless loop */}
            <div className="whitespace-nowrap flex gap-8" style={{ transform: 'translate3d(0,0,0)' }}>
              <div
                className="flex items-center gap-8"
                style={{
                  animation: `marquee ${duration}s linear infinite`,
                  animationPlayState: isPaused ? 'paused' : 'running'
                }}
              >
                {/* Two identical tracks for seamless loop */}
                <div className="inline-flex items-center gap-8">{repeatedNodes}</div>
                <div className="inline-flex items-center gap-8">{repeatedNodes}</div>
              </div>
            </div>

            <style>{`
              @keyframes marquee {
                0% { transform: translateX(0%); }
                100% { transform: translateX(-50%); }
              }
            `}</style>
          </div>
        </div>
      </div>
    </div>
  );
}
