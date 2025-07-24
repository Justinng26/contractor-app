import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}
const Input = ({ ...rest }: InputProps) => {
  return (
    <input
      {...rest}
      className="w-full bg-neutral-100 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
    />
  );
};

export default Input;
