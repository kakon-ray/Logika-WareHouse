import React from "react";

const Button = (props) => {
  return (
    <button
      type="button"
      className="inline-block mr-2 px-6 py-2 border-2 border-purple-500 text-purple-500 font-medium text-xs leading-tight uppercase rounded-full hover:bg-purple-600 hover:text-neutral-200 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
    >
      {props.children}
    </button>
  );
};

export default Button;
