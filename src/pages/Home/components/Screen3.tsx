import React from 'react';

export const Screen3 = () => {
  return (
    <div className="relative overflow-hidden">
      <img
        src="/assets/projects/interior-marquee.jpg"
        alt="Modern Innovations"
        className="w-full object-cover h-[70vh]"
      />
      <div className="marquee uppercase">
        <div className="marquee--inner gap-24 flex justify-around items-center">
          <span>Modern Structures</span>
          <span>Decoration</span>
          <span>Thinking Outside the Box</span>
          <span>Furniture</span>
        </div>
        <div className="marquee--inner gap-24 flex justify-around items-center">
          <span>Modern Structures</span>
          <span>Decoration</span>
          <span>Thinking Outside the Box</span>
          <span>Furniture</span>
        </div>
      </div>
    </div>
  );
};
