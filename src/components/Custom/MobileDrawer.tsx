// MobileDrawer.tsx
import React, { ReactNode, useRef } from "react";
import { animated, useSpring } from "@react-spring/web";

interface MobileDrawerProps {
  children?: ReactNode;
}

const MobileDrawer: React.FC<MobileDrawerProps> = ({ children }) => {
  const drawerRef = useRef<HTMLDivElement>(null);

  const springs = useSpring({
    from: { x: 100, opacity: 0 },
    to: { x: -2, opacity: 1 },
    leave: {
      x: 100,
      opacity: 0,
    },
  });

  return (
    <animated.div
      ref={drawerRef}
      className={"backdrop-blur-sm fixed bg-transparent w-full h-full z-50"}
      style={{
        top: 86,
        left: 0,
        ...springs,
      }}
    >
      {children}
    </animated.div>
  );
};

export default MobileDrawer;
