import React from "react";

const Button = ({ color, bgColor, text, size, borderRadious }) => {
  return (
    <button
      type="button "
      style={{ backgroundColor: bgColor, color, borderRadius: borderRadious }}
      className={`text-${size} p-3 hover:drop-shadow-xl`}
    >
      {text}
    </button>
  );
};

export default Button;
