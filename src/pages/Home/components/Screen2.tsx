import React from 'react';
import CTAButton from '../../../components/Custom/CTAButton';

const Screen2: React.FC = () => {

  return (
    <div className="grid h-full grid-cols-1 sm:grid-cols-2">
      {/* Image 1 */}
      <div className="relative">
        <img
          className=" h-screen w-screen  object-cover sm:object-fill"
          src="/assets/projects/kitchen-interior.jpg"
          alt="kitchen-interior"
        />
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="text-center space-y-1 text-white">
            <p style={{fontFamily:"junicode-regular"}} className="text-2xl text-black font-semibold tracking-wider">Crafting Culinary Spaces</p>
            <CTAButton btnColor='white' buttonText="Modular Kitchen" />
          </div>
        </div>
      </div>

      {/* Image 2 */}
      <div className="relative">
        <img
          className=" h-screen w-screen   object-cover sm:object-fill"
          src="/assets/projects/landing-furniture.jpg"
          alt="furniture-landing"
        />
        <div className="absolute inset-0 flex justify-center items-center ">
          <div className="text-center space-y-1 text-white font-semibold">
            <p style={{fontFamily:"junicode-regular"}} className="text-2xl font-semibold  tracking-wider">Furnishing Dreams, Uniquely Yours</p>
            <CTAButton btnColor='#301200' buttonText="Bespoke Furniture" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Screen2;
