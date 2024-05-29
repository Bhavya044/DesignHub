import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navLinks } from './nav.config';
import IconWrapper from '../Wrapper/IconWrapper';

interface INavigationBarProps {
  isMobileNavOpen?: boolean;
  onNavClick?: () => void;
}

const NavigationBar: React.FC<INavigationBarProps> = ({
  isMobileNavOpen,
  onNavClick,
}) => {
  const location = useLocation();

  return (
    <nav
      className={`flex w-full px-2 py-1 gap-12 ${
        isMobileNavOpen
          ? 'flex-col mt-6 gap-4'
          : 'flex-row  backdrop-filter py-1 px-2 -mt-1 backdrop-blur-lg bg-black rounded-md opacity-55'
      } tracking-wider text-lg font-light  justify-evenly items-center `}
    >
      {navLinks?.map((link, index) => (
        <Link
          key={index}
          to={link?.to}
          onClick={() => onNavClick?.()}
          className={` cursor-none ${
            isMobileNavOpen
              ? 'block w-full font-semibold text-black hover:shadow-lg text-center py-3'
              : 'w-max  relative group  text-white'
          } `}
        >
          <span
            style={{ fontFamily: 'junicode-regular' }}
            className="relative w-full"
          >
            {link?.text}
          </span>

          <span
            className={`absolute bg-white bottom-0 left-0 w-0 h-[1.5px] transition-all duration-300  ${location.pathname === link?.to ? 'w-full' : 'group-hover:w-full'} `}
          ></span>
        </Link>
      ))}
      {isMobileNavOpen ? (
        <div className="flex gap-6 mt-7">
          <IconWrapper iconPath="/assets/svgs/pinterest.svg" />
          <IconWrapper iconPath="/assets/svgs/instagram.svg" />
          <IconWrapper iconPath="/assets/svgs/facebook.svg" />
        </div>
      ) : null}
    </nav>
  );
};

export default NavigationBar;
