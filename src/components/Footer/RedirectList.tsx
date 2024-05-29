import React from 'react';
import IconWrapper from '../Wrapper/IconWrapper';

interface IRedirectListProps {
  header: string;
  content: { label: string; redirectTo: string, type?: "other" | "direction"|"mail"|"phone"; icon?: string }[];
}

const RedirectList: React.FC<IRedirectListProps> = ({ content, header }) => {

    const handleRedirect = (redirectTo: string, type?: string) => {
        if (type === "direction") {
          window.location.href = `https://www.google.com/maps/dir/?api=1&destination=${redirectTo}`;
        } else if (type === "mail") {
          window.location.href = `mailto:${redirectTo}`;
        } else if (type === "phone") {
          window.location.href = `tel:${redirectTo}`;
        } else {
          // Handle other types or no type specified
          // You can add more logic here if needed
        }
      };
  return (
    <div className='space-y-6 w-full flex flex-col justify-start'>
      <span className='uppercase tracking-wider text-md sm:no-underline underline'>{header}</span>
      <div className='flex flex-col w-full text-sm gap-3 text-gray-300 h-full'>
        {content?.map((item) => (
          <div
            className='hover:text-gray-50 flex gap-2 hover:underline hover:shadow-sm'
            key={item.label}
            onClick={() => handleRedirect(item.redirectTo, item.type)}
          >
            {item?.icon ? <IconWrapper width={20} height={36} iconPath={item?.icon} /> : null} {item.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RedirectList;
