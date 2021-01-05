import * as React from "react";

function SeverityIcon(props) {
  return (
    <svg width={20} height={20} fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 10a8 8 0 11-16.001 0A8 8 0 0118 10zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
        fill="#00463E"
      />
    </svg>
  );
}

export default SeverityIcon;
