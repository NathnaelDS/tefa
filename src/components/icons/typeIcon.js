import * as React from "react";

function TypeIcon(props) {
  return (
    <svg width={20} height={20} fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 10a8 8 0 11-16.001 0A8 8 0 0118 10zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 1111 10.83V11a1 1 0 01-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
        fill="#00463E"
      />
    </svg>
  );
}

export default TypeIcon;
