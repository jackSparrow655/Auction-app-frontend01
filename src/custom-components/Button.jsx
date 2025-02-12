import React from "react";

const Button = ({ content, isHighlight, changingColor = false }) => {
  return (
    <a
      href="#"
      className={`px-2 md:py-3 rounded text-center text-white font-medium ${
        isHighlight && "bg-richblue-700 border"
      } ${!isHighlight && "border bg-richblue-800"} hover:scale-95 transition-all duration-200 ${changingColor&& "hover:bg-gradient-to-r from-orange-500 to-orange-800"}`}
    >
      {content}
    </a>
  );
};

export default Button;