import React, { useEffect, useRef, useState } from 'react';

const ParallaxSection = ({ 
  imageUrl, 
  children, 
  height = '600px',
  speed = 0.5,
  className = ''
}) => {
  const parallaxRef = useRef(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!parallaxRef.current) return;
      
      const scrolled = window.pageYOffset;
      const rect = parallaxRef.current.getBoundingClientRect();
      const elementTop = rect.top + scrolled;
      const elementHeight = rect.height;
      
      // Check if element is in viewport
      if (scrolled + window.innerHeight > elementTop && scrolled < elementTop + elementHeight) {
        const parallaxOffset = (scrolled - elementTop) * speed;
        setOffset(parallaxOffset);
      }
    };

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [speed]);

  return (
    <div
      ref={parallaxRef}
      className={`relative overflow-hidden ${className}`}
      style={{ height }}
    >
      {/* Parallax Background Image - iOS Compatible */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          transform: `translate3d(0, ${offset}px, 0)`,
          willChange: 'transform',
          transition: 'transform 0.1s ease-out'
        }}
      >
        <div
          className="absolute inset-0 w-full"
          style={{
            height: `calc(100% + 200px)`,
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full">
        {children}
      </div>
    </div>
  );
};

export default ParallaxSection;
