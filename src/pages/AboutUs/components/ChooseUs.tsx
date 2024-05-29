import React from 'react';
import VectorCard from './VectorCard';

const ChooseUs = () => {
  return (
    <div className="relative w-full sm:h-screen h-full  border border-gray-100 shadow-lg p-4">
      {/* Content on top of the image */}
      <div className="absolute sm:top-1/3 top-[8%] left-[27%]  sm:left-1/2 transform sm:-translate-x-1/2 sm:-translate-y-1/2 text-center">
        <span
          className="sm:text-4xl text-xl font-bold text-white"
          style={{ fontFamily: 'junicode-bold' }}
        >
          WHY CHOOSE US
        </span>
      </div>

      {/* Image */}
      <img
        alt="interior"
        className="w-full sm:h-[30vw] h-max rounded-xl object-cover"
        src="/assets/projects/about-us-3rd-image.jpg"
      />

      <div className="sm:w-full sm:absolute sm:top-[70%] top-[15%] sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:-translate-y-1/2 grid sm:grid-cols-3 grid-cols-1 justify-center gap-4">
        {/* Content Section */}
        <VectorCard
          title="Quality"
          description=" As interior designers, the one thing that continues to resonate throughout our business is quality. From the moment you begin to discuss the project, right through to completion, we aim to uphold the highest standards possible and ensure that our clients are left with not only a great interior but a pleasant experience."
          image="/assets/svgs/quality.svg"
        />
        <VectorCard
          description="Our interior designers consistently push boundaries, whether reimagining kitchen layouts for dual functionality or incorporating a marine tank to enhance bedroom and en-suite lighting. Each project reflects our commitment to delivering uniquely brilliant interior designs."
          title="Creativity"
          image="/assets/svgs/think.svg"
        />
        <VectorCard
          title="Attention"
          description="We pay incredible attention to detail, selecting only the materials, furniture, and lighting that is perfect for the interior design job as a whole. And where we can’t find the perfect furniture, we can design and make bespoke furniture ourselves to deliver the perfect end result every time."
          image="/assets/svgs/attention.svg"
        />
        {/* End Content Section */}
      </div>
    </div>
  );
};

export default ChooseUs;
