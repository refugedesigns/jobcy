import React from "react";

const TechIcon = () => {
  return (
    <span className="inline-block">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" className="h-[38px] w-[38px]">
        <rect
          width="20"
          height="15"
          x="2"
          y="3"
          className="opacity-50"
          rx="3"
        ></rect>
        <path
          className="opacity-80"
          d="M16,21H8a.99992.99992,0,0,1-.832-1.55469l4-6a1.03785,1.03785,0,0,1,1.66406,0l4,6A.99992.99992,0,0,1,16,21Z"
        ></path>
      </svg>
    </span>
  );
};

export default TechIcon;
