import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'color' | 'monochrome';
  extraLine?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = 'h-12 w-auto', variant = 'color', extraLine }) => {
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
        <path d="M50 95C25 95 0 75 0 50C0 25 25 5 50 5C75 5 100 25 100 50C100 75 75 95 50 95Z" fill={colors.pink} />
        <path d="M50 20C60 -10 95 10 95 40C95 65 50 85 50 85C50 85 5 65 5 40C5 10 40 -10 50 20Z" fill="#FFFFFF"/>
        <g fill={colors.lavender}>
            <path d="M50 32.5C40.66 32.5 33.13 40.42 33.56 49.6C33.83 55.43 38.3 62.43 50 69.5C61.7 62.43 66.17 55.43 66.44 49.6C66.87 40.42 59.34 32.5 50 32.5ZM50 56C46.69 56 44 53.31 44 50C44 46.69 46.69 44 50 44C53.31 44 56 46.69 56 50C56 53.31 53.31 56 50 56Z"/>
        </g>
      </g>

      {/* Light mode text */}
      <g className="logo-text-light" transform="translate(115, 30)">
        <text x="0" y="15" fontFamily="Inter, sans-serif" fontSize="24" fontWeight="700" fill={textPrimaryColor}>
          Dr. Neha Bhatnagar
        </text>
        <text x="0" y="45" fontFamily="Inter, sans-serif" fontSize="15" fill={textSecondaryColor}>
          Gynecologist & Obstetrician | Maa & Baby Care
        </text>
        {extraLine && (
          <text x="0" y="65" fontFamily="Inter, sans-serif" fontSize="15" fill={textSecondaryColor}>
            {extraLine}
          </text>
        )}
      </g>

       {/* Dark mode text */}
      <g className="logo-text-dark" transform="translate(115, 30)">
        <text x="0" y="15" fontFamily="Inter, sans-serif" fontSize="24" fontWeight="700" fill={darkTextPrimaryColor}>
          Dr. Neha Bhatnagar
        </text>
        <text x="0" y="45" fontFamily="Inter, sans-serif" fontSize="15" fill={darkTextSecondaryColor}>
          Gynecologist & Obstetrician | Maa & Baby Care
        </text>
        {extraLine && (
           <text x="0" y="65" fontFamily="Inter, sans-serif" fontSize="15" fill={darkTextSecondaryColor}>
            {extraLine}
          </text>
        )}
      </g>
    </svg>
  );
};