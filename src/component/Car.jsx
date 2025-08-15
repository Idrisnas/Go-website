import React, { useEffect, useState } from 'react';

const Car = ({
  carImage,
  lineColor = 'bg-yellow-100',
  dividerColor = 'bg-yellow-200/50',
  direction = 'leftToRight',
  flipImage = true,
  offsetY = -16,
}) => {
  const isReverse = direction === 'rightToLeft';
  const animationClass = isReverse ? 'animate-driveReverse' : 'animate-drive';

  const [dividerCount, setDividerCount] = useState(12); // default for desktop

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        // mobile
        setDividerCount(6);
      } else if (width < 768) {
        // small tablets
        setDividerCount(8);
      } else {
        setDividerCount(12); // md and up
      }
    };

    handleResize(); // set on load
    window.addEventListener('resize', handleResize); // update on resize
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="w-full overflow-hidden relative">
      <div className="relative w-full h-24 sm:h-28 md:h-32 flex items-end justify-center">
        <div className={`w-full h-1 relative ${lineColor}`}>
          {/* Road Dividers */}
          {Array.from({ length: dividerCount }).map((_, i) => (
            <div
              key={i}
              className={`absolute bottom-0 h-6 sm:h-7 md:h-8 w-[4px] ${dividerColor}`}
              style={{ left: `${(i / dividerCount) * 100}%` }}
            />
          ))}

          {/* Animated Vehicle */}
          <div
            className={`absolute ${animationClass}`}
            style={{ bottom: `${offsetY}px` }}
          >
            <img
              src={carImage}
              alt="Vehicle"
              className={`w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain ${
                isReverse && flipImage ? 'scale-z-[-1]' : ''
              }`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Car;
