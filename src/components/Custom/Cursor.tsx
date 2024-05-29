// CustomCursor.tsx
import React, { useEffect, useState } from 'react';
import { animated } from '@react-spring/web';
import "./cursor.css"

const CustomCursor: React.FC = () => {
  const [trail, setTrail] = useState<Array<{ x: number; y: number }>>([]);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: MouseEvent) => {
    const newPosition = { x: event.clientX, y: event.clientY };
    setPosition(newPosition);
    setTimeout(() => {
      setTrail((prevTrail) => [...prevTrail, newPosition]?.slice(-10)); // Adjust trail length
    }, 100);
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      {trail?.map((trailPosition, index) => (
        <animated.div
          key={index}
          className="custom-cursor-trail"
          style={{
            left: `${trailPosition.x}px`,
            top: `${trailPosition.y}px`,
            opacity: 1 - index * 0.1, // Adjust opacity based on the trail order
            background: 'transparent',
          }}
        />
      ))}
      <animated.div
        className="custom-cursor"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: '25px',
          height: '25px',
          borderRadius: '50%',
          background: 'transparent',
        }}
      />
    </>
  );
};

export default CustomCursor;
