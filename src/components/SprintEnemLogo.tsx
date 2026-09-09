import React from 'react';

interface SprintEnemLogoProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  withText?: boolean;
  className?: string;
}

export const SprintEnemLogo: React.FC<SprintEnemLogoProps> = ({
  size = 'md',
  withText = false,
  className = '',
}) => {
  const sizeMap = {
    xs: 'w-7 h-7',
    sm: 'w-9 h-9',
    md: 'w-11 h-11',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24',
  };

  return (
    <div className={`inline-flex flex-col items-center justify-center ${className}`}>
      <div 
        className={`${sizeMap[size]} relative rounded-[26%] bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-600 p-[12%] shadow-md shadow-purple-500/25 flex items-center justify-center shrink-0 select-none`}
      >
        {/* Glow backdrop inside squircle */}
        <div className="absolute inset-0 rounded-[26%] bg-gradient-to-t from-black/10 to-white/10 pointer-events-none" />

        {/* SVG Lightning Bolt replicating uploaded logo */}
        <svg 
          viewBox="0 0 100 100" 
          className="w-full h-full text-white fill-current filter drop-shadow-[0_2px_4px_rgba(74,4,78,0.35)]"
        >
          <path d="M47 16 L68 16 L56 39 L75 39 L38 84 L49 52 L31 52 Z" />
        </svg>
      </div>

      {withText && (
        <span className="mt-1 font-black tracking-wider text-[11px] text-white uppercase text-center drop-shadow-xs">
          SPRINT ENEM
        </span>
      )}
    </div>
  );
};
