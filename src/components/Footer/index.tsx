// Footer.tsx

import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import RedirectList from './RedirectList';
import { footerConfig } from './footer.config';
import SocialMediaIcons from '../Layout/SocialMediaIcons';

interface IFooterProps {
  showAnimation: boolean;
}

const Footer: React.FC<IFooterProps> = ({ showAnimation = true }) => {
  const logoAnimation = useSpring({
    transform: showAnimation ? 'scale(0.7)' : 'scale(1)',
    config: { tension: 100, friction: 15 },
  });

  // First div opacity animation
  const firstDivAnimation = useSpring({
    opacity: showAnimation ? 0 : 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  return (
    <footer className="flex flex-col gap-5 relative bg-gradient-to-r from-black via-gray-800 to-gray-700 text-white p-10 h-max">
      <animated.div style={firstDivAnimation}>
        <div className="space-y-7 ">
          <div className="-ml-6 -mt-6 rounded shadow-sm">
            <animated.div style={logoAnimation}>
              <div className="flex items-center">
                <img
                  src={`/assets/logo/logo-gold.png`}
                  className="h-24"
                  alt="Logo"
                />
                <span
                  style={{ color: '#7d6615' }}
                  className="text-2xl text-yellow-700 flex flex-col mt-5 font-bold ml-4"
                >
                  BNB INDIA
                  <span className="text-sm text-white font-normal">
                    Infusing Life into Spaces, One Elegant Piece at a Time.
                  </span>
                </span>
              </div>
            </animated.div>

            <p className="mt-4 ml-6 text-sm break-all text-gray-500 whitespace-pre-line">
              B&B India, est. 2016: Leading the way in exquisite furniture. Our
              Dining Tables to Designer Sofas showcase innovative design and
              top-notch craftsmanship. Elevate your spaces with B&B India, where
              each piece tells a story of elegance, comfort, and enduring
              quality.
            </p>
          </div>
          <div className="sm:grid sm:grid-cols-3 space-y-4 sm:space-y-0 w-full">
            {footerConfig?.map((config) => (
              <RedirectList header={config?.header} content={config?.links} />
            ))}
          </div>
        </div>
      </animated.div>

      <div className="flex justify-center  border p-2 gap-6 border-gray-600 rounded-md ">
        <SocialMediaIcons fromFooter />
        {/* <SubscribeNewsletter/> */}
      </div>
    </footer>
  );
};

export default Footer;
