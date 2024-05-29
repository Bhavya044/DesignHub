import React from 'react';
import IconWrapper from '../../../components/Wrapper/IconWrapper';

const AmenitiesSection = () => {
  return (
    <div className="bg-gray-100 p-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1
            className="text-4xl font-bold text-gray-800"
            style={{ fontFamily: 'junicode-bold' }}
          >
            Premium Amenities at Your Fingertips
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Placeholder for Feature 1 */}
          <div className="p-8 bg-white shadow-md rounded-md">
            <div className="mb-4 flex w-full justify-center">
              <IconWrapper
                height={50}
                width={60}
                iconPath="/assets/svgs/furniture.svg"
              />
            </div>
            <h2 className="text-xl font-semibold mb-2"  style={{ fontFamily: 'junicode-italic' }}>Luxurious Furniture</h2>
            <p   style={{ fontFamily: 'junicode-regular' }} className="text-gray-600">
              Experience the epitome of comfort with our curated selection of
              high-end furniture pieces that redefine luxury living.
            </p>
          </div>

          {/* Placeholder for Feature 2 */}
          <div className="p-8 bg-white shadow-md rounded-md">
            <div className="mb-4 flex w-full justify-center">
              <IconWrapper
                height={50}
                width={60}
                iconPath="/assets/svgs/decor.svg"
              />
            </div>
            <h2 className="text-xl font-semibold mb-2"  style={{ fontFamily: 'junicode-italic' }}>Designer Decor</h2>
            <p   style={{ fontFamily: 'junicode-regular' }} className="text-gray-600">
              Elevate your space with our exclusive range of designer decor
              items, carefully crafted to reflect your unique style and taste.
            </p>
          </div>

          {/* Placeholder for Feature 3 */}
          <div className="p-8 bg-white shadow-md rounded-md">
            <div className="mb-4 flex w-full justify-center">
              <IconWrapper
                height={40}
                width={50}
                iconPath="/assets/svgs/smart-home.svg"
              />
            </div>
            <h2  style={{ fontFamily: 'junicode-italic' }} className="text-xl font-semibold mb-2 mt-6">
              Smart Home Integration
            </h2>
            <p   style={{ fontFamily: 'junicode-regular' }} className="text-gray-600">
              Embrace the future with our smart home solutions, seamlessly
              integrating technology into your interior design for a modern and
              convenient lifestyle.
            </p>
          </div>

          {/* "And more..." line */}
          {/*todo:link to service page */}
        </div>
        <div className="">
          <div className="p-1 mt-4 bg-white rounded-md">
            <div className="flex w-full justify-center">
              <p className="text-lg font-semibold  text-center text-gray-800">
                And more...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AmenitiesSection;
