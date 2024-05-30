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
    <footer className="flex flex-col gap-5 relative border-t text-white p-10 h-max">
      <animated.div style={firstDivAnimation}>
        <div className="space-y-7 ">
          <div className="-m-3 rounded-lg overflow-hidden bg-white shadow-md">
            <animated.div style={logoAnimation}>
              <div className="flex sm:flex-row flex-col sm:items-center p-4">
                <img
                  src={`/assets/logo/logo_bg.png`}
                  className="h-24 rounded-full"
                  alt="Logo"
                />
                <div className="ml-4">
                  <h2 className="text-2xl font-bold text-yellow-700">
                    Dreamspace Designs
                  </h2>
                  <p className="text-sm text-gray-500">
                    Crafting Inspirational Spaces, One Elegant Piece at a Time.
                  </p>
                </div>
              </div>
            </animated.div>

            <p
              style={{ fontFamily: 'junicode-regular' }}
              className="p-4 text-sm text-gray-500 whitespace-pre-line"
            >
              Dreamspace Design Hub, est. 20xx: Leading the way in crafting
              inspirational spaces. Our Dining Tables to Designer Sofas showcase
              innovative design and top-notch craftsmanship. Elevate your spaces
              with Dreamspace Designs, where each piece tells a story of
              elegance, comfort, and enduring quality.
            </p>
          </div>

          <div className="sm:grid sm:grid-cols-3 gap-3 space-y-4 sm:space-y-0 w-full">
            {footerConfig?.map((config) => (
              <RedirectList header={config?.header} content={config?.links} />
            ))}
          </div>
        </div>
      </animated.div>

      <div className="flex justify-center  border p-2 gap-6 border-gray-300 rounded-md ">
        <SocialMediaIcons fromFooter />
        {/* <SubscribeNewsletter/> */}
      </div>
    </footer>
  );
};

export default Footer;
