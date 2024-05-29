import { useEffect, useState } from 'react';

const useScrollVisibility = () => {
  const [isHeaderVisible, setHeaderVisibility] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // Set visibility based on scroll position
      setHeaderVisibility(scrollPosition < window.innerHeight);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return isHeaderVisible;
};

export default useScrollVisibility;
