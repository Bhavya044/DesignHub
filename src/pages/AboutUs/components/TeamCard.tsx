import React from 'react';
import { useSpring, animated } from '@react-spring/web';

interface SocialLink {
  url: string;
  iconPath: string;
}

interface TeamMemberProps {
  name: string;
  role: string;
  description?: string;
  imageUrl: string;
  socialLinks?: SocialLink[];
}

const TeamCard: React.FC<TeamMemberProps> = ({
  name,
  role,
  description,
  imageUrl,
  socialLinks = [],
}) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const infoAnimation = useSpring({
    height: isHovered ? '40%' : '0%',
    bottom: isHovered ? '0%' : '-40%', // Stick to the bottom
    opacity: isHovered ? 0.6 : 0,
  });

  return (
    <div
      className="relative overflow-hidden rounded shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        className="object-cover w-full h-56 md:h-64 xl:h-80"
        src={imageUrl}
        alt={name}
      />
      <animated.div
        style={infoAnimation}
        className="info absolute rounded-t-lg inset-x-0 bottom-0 flex flex-col justify-center px-5 py-4 text-center bg-black"
      >
        <p className="mb-1 text-lg font-bold text-gray-100">{name}</p>
        <p className="mb-4 text-xs text-gray-100">{role}</p>
        <p className="mb-4 text-xs tracking-wide text-gray-400">{description}</p>
        <div className="flex items-center justify-center space-x-3">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              className="text-white transition-colors duration-300 hover:text-teal-accent-400"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                <path d={link.iconPath} />
              </svg>
            </a>
          ))}
        </div>
      </animated.div>
    </div>
  );
};

export default TeamCard;
