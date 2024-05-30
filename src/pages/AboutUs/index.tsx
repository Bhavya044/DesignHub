import React, { useEffect, useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import useIsMobile from '../../components/hooks/useIsMobile';
import ImageOverlayComponent from '../../components/Custom/ImageOverlay';
import ChooseUs from './components/ChooseUs';
import Testimonials from './components/AmentiesSection';
import ProjectView from './components/ProjectView';

const AboutUs = () => {
  const isMobile = useIsMobile();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Listen for scroll events to trigger the animation
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const triggerPoint = window.innerHeight / 2; // Adjust the trigger point as needed

      setIsVisible(scrollY > triggerPoint);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const slideInAnimation = useSpring({
    // opacity: isVisible ? 1 : 0,

    to: {
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateX(0%)' : 'translateX(2%)',
    },
  });

  return (
    <div className="space-y-20">
      <div className="relative">
        <img
          style={{ height: isMobile ? '70vh' : '40vw' }}
          className=" w-screen object-cover"
          src="/assets/projects/about-us-page-main.jpg"
          alt="About Us"
        />
        <div
          style={{ backdropFilter: 'blur(3px)' }}
          className="absolute  sm:top-[47%] top-[50%] rounded-lg bg-transparent    justify-center items-center h-[10vw] sm:left-10 left-7 w-[40%]"
        >
          <div className="flex flex-col">
            <div
              style={{ fontFamily: 'custom-cursive-font' }}
              className="sm:text-5xl text-2xl flex gap-8  w-max font-semibold text-white"
            >
              About{' '}
              <span
                className="w-full mt-3"
                style={{ fontFamily: 'junicode-bold' }}
              >
                Dream Space{' '}
              </span>
            </div>
            <div className="w-36 h-0.5 bg-white sm:ml-40 rounded-sm mt-3" />{' '}
          </div>
          <div
            className="mt-2 sm:text-2xl text-lg text-white"
            style={{ fontFamily: 'junicode-italic' }}
          >
            The Interior speak for themselves
          </div>
        </div>
      </div>
      <div className=" h-max p-4 gap-6 grid sm:grid-cols-2">
        <ImageOverlayComponent
          backgroundImage="/assets/projects/home-interior-orange.png"
          listData={[
            { value: '80', label: 'Projects Done' },
            { value: '30', label: 'Happy Clients' },
            { value: '600', label: 'Working Hours' },
            { value: '1', label: 'Awards' },
          ]}
        />
        <animated.div style={slideInAnimation} className="flex flex-col gap-4">
          <span className="text-xs -mb-2 text-gray-500"> NUMBERS</span>
          <div className="w-32 h-0.5 bg-black rounded-sm -mb-2" />{' '}
          <div
            style={{ fontFamily: 'junicode-italic' }}
            className="text-4xl  font-bold "
          >
            Make with love, all what we do.
          </div>
          <div style={{ fontFamily: 'junicode-regular' }} className="text-md">
            Established in 20xx, Dream Space India is a distinguished name in
            interior design, known for manufacturing and wholesaling exquisite
            furnishings. Committed to exceeding client specifications, we adhere
            to stringent quality standards.
            <br />
            Our dedication to excellence is evident in our curated furniture
            that combines style and functionality. Under the insightful
            leadership of Mr. Deepak Kumar, B&B India has experienced consistent
            growth, becoming synonymous with unparalleled craftsmanship and
            design sophistication. As we continue our journey, we remain
            dedicated to enhancing living spaces, inviting you to explore a
            world where timeless design meets meticulous craftsmanship,
            reflecting your unique style and vision.
          </div>{' '}
        </animated.div>
      </div>
      <ChooseUs />
      <ProjectView />
      <Testimonials />
    </div>
  );
};

export default AboutUs;
