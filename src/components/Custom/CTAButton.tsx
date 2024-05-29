import React from "react";
import { useSpring, animated } from "@react-spring/web";

interface ICTAButtonProps {
  buttonText: string;
  btnColor?: string;
}

const CTAButton: React.FC<ICTAButtonProps> = ({
  buttonText,
  btnColor = "#c4a766",
}) => {
  const [isHovered, setHovered] = React.useState(false);

  const springProps = useSpring({
    height: isHovered ? "100%" : "0%",
    config: { tension: 190, friction: 20 },
  });
console.log(
  "btn color",btnColor
)
  return (
    <div
    style={{border:`2px solid ${btnColor}`,color:btnColor}}
      className={`relative backdrop-blur-sm inline-block uppercase py-1 font-semibold  px-6 rounded-sm overflow-hidden`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <animated.div
        style={{
          height: springProps.height.to((height) => `${height}`),
          backgroundColor: "currentColor",
        }}
        className="absolute inset-0"
      />
      <animated.span
        className="relative z-10"
        style={{
          color: isHovered ? btnColor==="white"? "black": "white" : "currentColor",
        }}
      >
        {buttonText}
      </animated.span>
    </div>
  );
};

export default CTAButton;
