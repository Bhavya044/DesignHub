import React from "react";

interface CustomInputProps {
  label?: string;
  type?: 'text' | 'number' | 'textarea'; // Adding support for different input types
  value?: string | number;
  id?: string;
}

const CustomInput: React.FC<CustomInputProps> = ({ label, type = 'text', ...rest }) => {
  const isTextarea = type === 'textarea';

  const [isFocused, setIsFocused] = React.useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div className="flex flex-col mb-8 relative">
      <input
        {...rest}
        type={type}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={`appearance-none focus:outline-gray-500 bg-transparent border-b-2 border-gray-500 focus:border-none text-gray-600 py-2 px-3 leading-tight ${isFocused || rest.value ? 'pb-1 backdrop-blur-md' : ''}`}
      />
      <label
          onFocus={handleFocus}
          onBlur={handleBlur}
        htmlFor={rest.id}
        className={`absolute top-0 left-0 text-gray-500 transition-all ${isFocused ? '-translate-y-6' : ''}`}>
        {label}
      </label>
    </div>
  );
};

export default CustomInput;
