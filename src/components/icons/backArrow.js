import * as React from "react";

function BackArrow(props) {
  return (
    <svg width={20} height={20} fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
        fill="#000"
      />
    </svg>
  );
}

export default BackArrow;
