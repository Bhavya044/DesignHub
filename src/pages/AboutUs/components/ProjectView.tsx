import React, { useEffect, useState } from 'react';
import { useSpring, animated } from '@react-spring/web';

const ProjectView = () => {
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

  const slideInAnimation = useSpring({
    // opacity: isVisible ? 1 : 0,

    to: { opacity: isVisible? 1 : 0, transform: isVisible?"translateX(0%)":"translateX(-10%)"}, 
  });
  return (
    <div className="p-2 grid md:grid-cols-2 md:gap-3 gap-8 h-max w-full">
      <animated.div style={slideInAnimation}className='flex flex-col gap-5 justify-center'>
    <div>
      <div
          style={{ fontFamily: 'junicode-italic' }}
          className="text-3xl font-bold"
        >
          Designing Beautiful, Eco-friendly and Green Structures Around the
          City!
        </div>{' '}
        
        <div className="w-32 h-0.5 bg-blue-400 rounded-sm -mb-1" />{' '}
        </div> 
        <span  style={{ fontFamily: 'junicode-regular' }} className="text-md">
        Embark on a journey with us as we pioneer the development of urban landscapes that seamlessly blend beauty, sustainability, and ecological responsibility. Our commitment lies in crafting architectural marvels that not only captivate the eye but also nurture the environment. Through innovative design principles and a dedication to green construction practices, we're reshaping the urban fabric one project at a time. Join our mission to redefine cityscapes, where every structure serves as a testament to our dedication to creating a greener, more harmonious world. Together, let's build a future where stunning architecture and environmental stewardship go hand in hand, inspiring generations to come.
        </span>
      </animated.div>
      <div className="relative">
        <div
      
          className="absolute z-10 -top-7 left-14 sm:w-72 w-52 sm:h-[34vw] h-[32vh] bg-blue-300 opacity-50"
        ></div>
        <img
          className="object-cover relative z-20"
          src="/assets/projects/about-us-project.jpg"
          alt="lokhandwala project"
        />
      </div>
    </div>
  );
};

export default ProjectView;
