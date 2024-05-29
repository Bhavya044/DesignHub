// ImageOverlayComponent.tsx

import React from 'react';

interface ProjectData {
  value: string;
  label: string;
}

interface ImageOverlayProps {
  backgroundImage: string;
  listData: ProjectData[];
}

const ImageOverlayComponent: React.FC<ImageOverlayProps> = ({ backgroundImage, listData }) => {
  const backgroundImageStyle = { backgroundImage: `url(${backgroundImage})` };
  const textStyle = { fontFamily: 'junicode-regular' };

  return (
    <div style={{ ...backgroundImageStyle }} className="p-5 bg-cover h-full flex bg-center w-full">
      <div style={{ ...textStyle }} className='bg-white grid grid-cols-2 gap-4 justify-center p-4 rounded w-full'>
        {listData?.map((project, index) => (
          <div
            key={index}
            className="text-4xl flex flex-col justify-center items-center font-extrabold uppercase bg-clip-text text-transparent bg-repeat"
            style={{ ...backgroundImageStyle }}
          >
            {project.value}
            <div className='sm:text-lg text-sm text-center '>
              {project.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageOverlayComponent;
