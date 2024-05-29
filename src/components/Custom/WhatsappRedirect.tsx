import React, { useState } from "react";
import IconWrapper from "../Wrapper/IconWrapper";
import ChatComponent from "../Chat/Chat";
import useIsMobile from "../hooks/useIsMobile";
import { animated, useSpring } from "@react-spring/web";

const WhatsappRedirect = () => {
  const isMobileDevice = useIsMobile();

  const [showChatComponent, setShowChatComponent] = useState(false);

  const chatAnimation = useSpring({
    opacity: showChatComponent ? 1 : 0,
    transform: `scale(${showChatComponent ? 1 : 0.8})`,
    config: { duration: 100 },
  });

  const iconAnimation = useSpring({
    opacity: showChatComponent ? 0 : 1,
  });

  const redirectToWhatsApp = () => {
    const phoneNumber = "09811001353";

    if (isMobileDevice) {
      // Open WhatsApp with a predefined message
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=Hi`;
      window.open(whatsappUrl, "_blank");
    } else {
      // Show chat component in the same tab
      setShowChatComponent(true);
    }
  };

  return (
    <div className="z-50">
      <animated.div style={iconAnimation} className="fixed z-50 bottom-8 right-8">
        <div
          className="cursor-pointer transform transition-transform duration-200 hover:scale-110 bg-black text-white rounded-full p-3"
          onClick={redirectToWhatsApp}
        >
          <IconWrapper
            iconPath={`/assets/svgs/${
              isMobileDevice ? "whatsapp.svg" : "chat-help.svg"
            }`}
          />
        </div>
      </animated.div>
      <animated.div style={chatAnimation} className="fixed bottom-2 right-5">
        {showChatComponent && (
          <ChatComponent onClose={() => setShowChatComponent(false)} />
        )}
      </animated.div>
    </div>
  );
};

export default WhatsappRedirect;
