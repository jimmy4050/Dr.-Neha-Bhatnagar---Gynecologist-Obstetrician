import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'color' | 'monochrome';
}

export const Logo: React.FC<LogoProps> = ({ className = 'h-12 w-auto', variant = 'color' }) => {
  const isMonochrome = variant === 'monochrome';

  const colors = {
    pink: isMonochrome ? 'currentColor' : '#FADADD',
    lavender: isMonochrome ? 'currentColor' : '#E4C7F7',
    textPrimaryLight: '#374151',
    textSecondaryLight: '#6B7280',
    textPrimaryDark: '#F3F4F6',
    textSecondaryDark: '#9CA3AF',
  };

  const textPrimaryColor = isMonochrome ? 'currentColor' : colors.textPrimaryLight;
  const textSecondaryColor = isMonochrome ? 'currentColor' : colors.textSecondaryLight;
  const darkTextPrimaryColor = isMonochrome ? 'currentColor' : colors.textPrimaryDark;
  const darkTextSecondaryColor = isMonochrome ? 'currentColor' : colors.textSecondaryDark;
  

  return (
    <svg 
      className={className} 
      viewBox="0 0 400 100" 
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Dr. Neha Bhatnagar Logo"
    >
      <defs>
        <style>
          {`
            .logo-text-dark { display: none; }
            .logo-text-light { display: block; }
            .dark .logo-text-dark { display: block; }
            .dark .logo-text-light { display: none; }
          `}
        </style>
      </defs>
      
      {/* Icon */}
      <g>
        <path 
          d="M50 95C25 95 0 75 0 50C0 25 25 5 50 5C75 5 100 25 100 50C100 75 75 95 50 95Z" 
          fill={colors.pink} 
        />
        <path 
          d="M50,20 C62.5,-5 95,10 95,40 C95,65 50,90 50,90 C50,90 5,65 5,40 C5,10 37.5,-5 50,20 Z" 
          fill="#FFFFFF"
        />
        <path 
          d="M62 45 C 62 38, 57 32, 50 32 C 43 32, 38 38, 38 45 C 38 52, 43 65, 50 65 C 57 65, 62 52, 62 45 Z M50 68 C 45 68, 42 75, 42 80 C 42 85, 45 88, 50 88 C 55 88, 58 85, 58 80 C 58 75, 55 68, 50 68 Z M50 30 C 54 30, 56 26, 56 23 C 56 20, 54 18, 50 18 C 46 18, 44 20, 44 23 C 44 26, 46 30, 50 30 Z" 
          fill={colors.lavender}
          transform="translate(0, 5)"
        />
      </g>

      {/* Light mode text */}
      <g className="logo-text-light" transform="translate(115, 25)">
        <text x="0" y="15" fontFamily="Inter, sans-serif" fontSize="22" fontWeight="700" fill={textPrimaryColor}>
          Dr. Neha Bhatnagar
        </text>
        <text x="0" y="40" fontFamily="Inter, sans-serif" fontSize="14" fill={textSecondaryColor}>
          Gynecologist & Obstetrician
        </text>
         <text x="0" y="60" fontFamily="Inter, sans-serif" fontSize="14" fill={textSecondaryColor}>
          Maa & Baby Care
        </text>
      </g>

       {/* Dark mode text */}
      <g className="logo-text-dark" transform="translate(115, 25)">
        <text x="0" y="15" fontFamily="Inter, sans-serif" fontSize="22" fontWeight="700" fill={darkTextPrimaryColor}>
          Dr. Neha Bhatnagar
        </text>
        <text x="0" y="40" fontFamily="Inter, sans-serif" fontSize="14" fill={darkTextSecondaryColor}>
          Gynecologist & Obstetrician
        </text>
         <text x="0" y="60" fontFamily="Inter, sans-serif" fontSize="14" fill={darkTextSecondaryColor}>
          Maa & Baby Care
        </text>
      </g>
    </svg>
  );
};