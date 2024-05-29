import React from "react";
import IconWrapper from "../Wrapper/IconWrapper";
import SocialMediaIcons from "../Layout/SocialMediaIcons";

const NavigationContactInfo = () => {
  return (
    <div className="flex text-white justify-center sm:justify-between sm:border-b border-gray-300 ">
      <div className="flex gap-7 justify-center  w-full items-center">
        <div className="flex flex-col sm:flex-row sm:gap-3 items-center  justify-center w-full">
          <img
            src="/assets/logo/logo-gold.png"
            alt="logo-bnb-india"
            className="sm:w-36 sm:h-16 w-36 h-16 object-fill"
          />
          <h1 className=" sm:mt-8 font-medium tracking-widest  text-pretty text-yellow-600 text-md  uppercase font-verdana">
            bNb India
          </h1>
        </div>

       
      </div>
      <SocialMediaIcons/>
      {/* <div className="sm:flex hidden gap-4 mt-6 text-sm">
        <div className="flex  gap-1  items-center">
          <IconWrapper
            width={25}
            height={25}
            iconPath="/assets/svgs/mail.svg"
          />
          <span className="text-xs">Email: </span>
          <span className="font-verdana">bhupeshbhaskar21@gmail.com</span>
        </div>
        <div className="flex gap-1 mr-4  items-center">
          <IconWrapper
            width={25}
            height={25}
            iconPath="/assets/svgs/phone.svg"
          />
          <span className="text-xs"> Call Us: </span>
          <span className="font-verdana">098110 01353</span>
        </div>
      </div> */}
    </div>
  );
};

export default NavigationContactInfo;
