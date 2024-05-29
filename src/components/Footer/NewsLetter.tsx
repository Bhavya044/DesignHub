import React from 'react';
import { useSpring, animated } from '@react-spring/web';

const CustomInput = () => {
  const [isFocused, setIsFocused] = React.useState(false);
  const inputRef = React.useRef(null);

  const springProps = useSpring({
    width: isFocused ? '80%' : '10%',
  });

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div className="flex flex-col">
      <animated.label
        className="block text-gray-700 text-sm font-bold mb-2 relative"
        style={{
          width: springProps.width,
          borderColor: isFocused ? 'green' : 'red',
        }}
        htmlFor="inputField"
      >
        <span className="absolute top-0 left-0 px-2 bg-white">What's your name?</span>
        <input
          ref={inputRef}
          type="text"
          id="inputField"
          className="appearance-none h-8 bg-transparent border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </animated.label>
      <input
        type="submit"
        value="Submit!"
        className={`-mt-1 px-4 py-2 cursor-pointer ${
          isFocused ? 'opacity-100' : 'opacity-0'
        } transition-opacity duration-200`}
        style={{ background: isFocused ? '#EEE' : 'transparent' }}
      />
    </div>
  );
};

export default CustomInput;
