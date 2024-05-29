import React, { CSSProperties, ReactNode } from "react";

interface IconWrapperProps {
  iconPath?: string;
  width?: string | number;
  height?: string | number;
  children?: ReactNode;
  onClick?:()=>void
}

const IconWrapper: React.FC<IconWrapperProps> = ({
  iconPath,
  width,
  height,
  children,
  onClick
}) => {
  const iconStyle: CSSProperties = {
    width: width ?? 30,
    height: height ?? 30,
  };

  return (
    <div onClick={onClick} className="hover:-translate-y-0.5 " style={iconStyle}>
      {iconPath ? <img src={iconPath} alt="icon" /> : children}
    </div>
  );
};

export default IconWrapper;
