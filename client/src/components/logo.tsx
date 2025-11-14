/**
 * Pefiy Wave Logo Component
 * Derived from pefiy-figma-branding/components/WaveLogo.tsx
 */

interface WaveLogoProps {
  className?: string;
  variant?: 'full' | 'icon' | 'horizontal';
}

export function WaveLogo({ className = '', variant = 'icon' }: WaveLogoProps) {
  if (variant === 'icon') {
    return (
      <svg className={className} viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="sphereGradient" cx="35%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#6B9EFF" />
            <stop offset="30%" stopColor="#5588FF" />
            <stop offset="60%" stopColor="#3366EE" />
            <stop offset="100%" stopColor="#0033BB" />
          </radialGradient>
          <filter id="sphereShadow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
            <feOffset dx="0" dy="2" result="offsetblur" />
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.3" />
            </feComponentTransfer>
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        
        {/* L-shaped pattern */}
        <g filter="url(#sphereShadow)">
          {/* Bottom row */}
          <circle cx="40" cy="120" r="18" fill="url(#sphereGradient)" />
          <circle cx="80" cy="120" r="18" fill="url(#sphereGradient)" />
          <circle cx="120" cy="120" r="18" fill="url(#sphereGradient)" />
          
          {/* Left column */}
          <circle cx="40" cy="80" r="18" fill="url(#sphereGradient)" />
          <circle cx="40" cy="40" r="18" fill="url(#sphereGradient)" />
          
          {/* Top row partial */}
          <circle cx="80" cy="40" r="18" fill="url(#sphereGradient)" />
          <circle cx="120" cy="40" r="18" fill="url(#sphereGradient)" />
        </g>
      </svg>
    );
  }

  if (variant === 'horizontal') {
    return (
      <svg className={className} viewBox="0 0 420 160" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="sphereGradientH" cx="35%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#6B9EFF" />
            <stop offset="30%" stopColor="#5588FF" />
            <stop offset="60%" stopColor="#3366EE" />
            <stop offset="100%" stopColor="#0033BB" />
          </radialGradient>
          <filter id="sphereShadowH" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
            <feOffset dx="0" dy="2" result="offsetblur" />
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.3" />
            </feComponentTransfer>
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        
        <g filter="url(#sphereShadowH)">
          {/* Bottom row */}
          <circle cx="40" cy="120" r="18" fill="url(#sphereGradientH)" />
          <circle cx="80" cy="120" r="18" fill="url(#sphereGradientH)" />
          <circle cx="120" cy="120" r="18" fill="url(#sphereGradientH)" />
          
          {/* Left column */}
          <circle cx="40" cy="80" r="18" fill="url(#sphereGradientH)" />
          <circle cx="40" cy="40" r="18" fill="url(#sphereGradientH)" />
          
          {/* Top row partial */}
          <circle cx="80" cy="40" r="18" fill="url(#sphereGradientH)" />
          <circle cx="120" cy="40" r="18" fill="url(#sphereGradientH)" />
        </g>
        
        <text x="190" y="100" fill="#1e3a8a" fontSize="56" fontWeight="700" fontFamily="system-ui">Pefiy</text>
      </svg>
    );
  }

  return (
    <svg className={className} viewBox="0 0 160 260" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="sphereGradientF" cx="35%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#6B9EFF" />
          <stop offset="30%" stopColor="#5588FF" />
          <stop offset="60%" stopColor="#3366EE" />
          <stop offset="100%" stopColor="#0033BB" />
        </radialGradient>
        <filter id="sphereShadowF" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
          <feOffset dx="0" dy="2" result="offsetblur" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.3" />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      
      <g filter="url(#sphereShadowF)" transform="translate(0, 20)">
        {/* Bottom row */}
        <circle cx="40" cy="120" r="18" fill="url(#sphereGradientF)" />
        <circle cx="80" cy="120" r="18" fill="url(#sphereGradientF)" />
        <circle cx="120" cy="120" r="18" fill="url(#sphereGradientF)" />
        
        {/* Left column */}
        <circle cx="40" cy="80" r="18" fill="url(#sphereGradientF)" />
        <circle cx="40" cy="40" r="18" fill="url(#sphereGradientF)" />
        
        {/* Top row partial */}
        <circle cx="80" cy="40" r="18" fill="url(#sphereGradientF)" />
        <circle cx="120" cy="40" r="18" fill="url(#sphereGradientF)" />
      </g>
      
      <text x="80" y="210" textAnchor="middle" fill="#1e3a8a" fontSize="40" fontWeight="700" fontFamily="system-ui">Pefiy</text>
    </svg>
  );
}

