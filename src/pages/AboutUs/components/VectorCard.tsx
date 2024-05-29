import React, { useEffect, useState } from 'react';
import { useSpring, animated } from '@react-spring/web';

interface IVectorCardProps {
  title: string;
  image: string;
  description?: string;
}

const VectorCard: React.FC<IVectorCardProps> = ({
  title,
  image,
  description,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Listen for scroll events to trigger the animation
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const triggerPoint = window.innerHeight; // Adjust the trigger point as needed

      setIsVisible(scrollY > triggerPoint);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const cardAnimation = useSpring({
    to: { opacity: isVisible ? 1 : 0 },
    config: { duration: 700 },
  });

  return (
    <animated.div
      style={cardAnimation}
      className="relative flex flex-col  text-gray-700 bg-white shadow-md bg-clip-border rounded-xl "
    >
      <div className="sm:p-6 px-4 py-10">
        <img className="h-12" src={image} alt={title} />
        <h5
          style={{ fontFamily: 'junicode-italic' }}
          className="block mb-2  text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900"
        >
          {title}
        </h5>
        <p
          style={{ fontFamily: 'junicode-regular' }}
          className="block font-sans text-sm antialiased font-light leading-relaxed text-inherit"
        >
          {description}
        </p>
      </div>
    </animated.div>
  );
};

export default VectorCard;
