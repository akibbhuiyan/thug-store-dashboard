import React from "react";

const Button = ({ color, bgColor, text, size, borderRadious, width }) => {
  return (
    <button
      type="button "
      style={{ backgroundColor: bgColor, color, borderRadius: borderRadious }}
      className={`text-${size} p-3 hover:drop-shadow-xl w-${width}`}
    >
      {text}
    </button>
  );
};

export default Button;
