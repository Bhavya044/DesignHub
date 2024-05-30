import React, { ReactNode, useEffect, useState } from 'react';
import { animated, useSpring } from '@react-spring/web';

import NavigationBar from '../Navbar/NavigationBar';
import WhatsappRedirect from '../Custom/WhatsappRedirect';
import useIsMobile from '../hooks/useIsMobile';
import MobileDrawer from '../Custom/MobileDrawer';
import IconWrapper from '../Wrapper/IconWrapper';
import Footer from '../Footer';
import useScrollVisibility from '../hooks/useScrollVisibility';
import CustomCursor from '../Custom/Cursor';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const isMobileDevice = useIsMobile();
  const isHeaderVisible = useScrollVisibility();
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);
  const path = window.location.pathname;
  console.log('path', path);

  const toggleMobileNav = () => {
    setMobileNavOpen(!isMobileNavOpen);
  };

  const iconSpring = useSpring({
    transform: isMobileNavOpen ? 'rotate(90deg)' : 'rotate(0deg)',
  });

  const headerSpring = useSpring({
    transform: isHeaderVisible ? 'translateY(0%)' : 'translateY(-100%)',
  });

  useEffect(() => {
    if (isMobileNavOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [isMobileNavOpen]);

  return (
    <section className={`flex flex-col relative h-full min-h-screen`}>
      {!isMobileDevice ? <CustomCursor /> : null}

      <animated.div
        style={headerSpring}
        className="w-full h-max  fixed z-30 flex flex-col bg-cover bg-center"
      >
        <div className="flex flex-col gap-2 z-10">
          {/* <NavigationContactInfo /> */}
          {!isMobileDevice ? (
            <div
              className={
                path === '/'
                  ? 'flex w-full justify-between items-center p-3 backdrop-blur-sm border-b'
                  : 'flex w-full p-4 border-b justify-between backdrop-blur-xs'
              }
            >
              <div
                className={`text-xl uppercase font-bold flex ${path === '/' ? 'text-white' : 'text-black'}`}
              >
                {' '}
                <img
                  src="/assets/logo/logo_transparent.png"
                  alt="logo-bnb-india"
                  className="sm:w-[40%] sm:h-[40%] w-36 h-16 object-fill"
                />
              </div>
              <div className="sm:mt-4">
                <NavigationBar />
              </div>
            </div>
          ) : (
            <div
              className={
                path === '/'
                  ? 'flex w-full items-center p-3 backdrop-blur-sm border-b'
                  : 'flex w-full items-center justify-between p-4 border-b backdrop-blur-xs'
              }
            >
              <div
                className={`text-xl uppercase font-bold flex-grow flex items-center justify-center ${path === '/' ? 'text-white' : 'text-black'}`}
              >
                <img
                  src="/assets/logo/logo_transparent.png"
                  alt="logo-bnb-india"
                  className="sm:w-[40%] sm:h-[40%] h-[60%] w-[70%] object-fill"
                />
              </div>
              <button
                onClick={toggleMobileNav}
                className="lg:hidden absolute top-5 right-4 z-20"
              >
                <animated.div style={iconSpring}>
                  <IconWrapper
                    width={isMobileNavOpen ? 35 : 29}
                    height={isMobileNavOpen ? 35 : 29}
                    iconPath={`/assets/svgs/${isMobileNavOpen ? 'close.svg' : 'menu.svg'}`}
                  />
                </animated.div>
              </button>
            </div>
          )}
        </div>
      </animated.div>
      <div
        className={`min-h-screen ${isMobileNavOpen ? 'overflow-hidden' : 'overflow-auto'}`}
      >
        {children}
      </div>
      {isMobileNavOpen ? (
        <MobileDrawer>
          <NavigationBar
            onNavClick={() => setMobileNavOpen(false)}
            isMobileNavOpen={isMobileNavOpen}
          />
        </MobileDrawer>
      ) : null}
      <WhatsappRedirect />
      <div className="mt-8">
        <Footer showAnimation={isHeaderVisible} />
      </div>
    </section>
  );
};

export default Layout;
