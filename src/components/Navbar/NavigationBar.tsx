import React from "react";
import { Link, useLocation } from "react-router-dom";
import { navLinks } from "./nav.config";
import IconWrapper from "../Wrapper/IconWrapper";

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
      className={`flex w-full px-3 gap-12 ${
        isMobileNavOpen
          ? "flex-col mt-6"
          : "flex-row backdrop-filter py-1 px-2 mt-4 backdrop-blur-lg bg-black rounded-sm opacity-75"
      } tracking-wider text-lg font-light  justify-evenly items-center `}
    >
      {navLinks?.map((link, index) => (
        <Link
          key={index}
          style={{ fontFamily: "junicode-regular" }}
          to={link?.to}
          onClick={() => onNavClick?.()}
          className={`${
            isMobileNavOpen
              ? "block w-full font-semibold text-white hover:shadow-lg text-center py-3"
              : "hover:font-semibold hover:underline text-white"
          } relative ${
            location.pathname === link?.to ? "bg-gray-500 px-3 rounded-md" : "" // Add the active tab background color here
          }`}
        >
          <span className="relative">
            {link?.text}
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-white transform origin-bottom scale-x-0 transition-transform group-hover:scale-x-100"></span>
          </span>
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
