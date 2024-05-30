import React from 'react';
import IconWrapper from '../Wrapper/IconWrapper';

interface IRedirectListProps {
  header: string;
  content: {
    label: string;
    redirectTo: string;
    type?: 'other' | 'direction' | 'mail' | 'phone';
    icon?: string;
  }[];
}

const RedirectList: React.FC<IRedirectListProps> = ({ content, header }) => {
  const handleRedirect = (redirectTo: string, type?: string) => {
    if (type === 'direction') {
      window.location.href = `https://www.google.com/maps/dir/?api=1&destination=${redirectTo}`;
    } else if (type === 'mail') {
      window.location.href = `mailto:${redirectTo}`;
    } else if (type === 'phone') {
      window.location.href = `tel:${redirectTo}`;
    } else {
      // Handle other types or no type specified
      // You can add more logic here if needed
    }
  };

  return (
    <div className="space-y-6 w-full flex flex-col justify-start">
      <span className="uppercase  text-yellow-600 tracking-wider text-md sm:no-underline underline">
        {header}
      </span>
      <div className="flex flex-col w-full text-md gap-3 text-gray-300 h-full">
        {content?.map((item, index) => (
          <div
            className="flex gap-2 text-gray-700  relative group"
            key={index}
            onClick={() => handleRedirect(item.redirectTo, item.type)}
          >
            {item?.icon ? (
              <IconWrapper width={20} height={36} iconPath={item?.icon} />
            ) : null}

            <span
              style={{ fontFamily: 'junicode-regular' }}
              className="relative w-full"
            >
              {item.label}
            </span>
            <span className="absolute bg-gray-700 bottom-0 left-0 w-0 h-px transition-all duration-300 group-hover:w-full"></span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RedirectList;
