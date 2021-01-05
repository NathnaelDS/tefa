import React from "react";

function BasicInfoIcon(props) {
  return (
    <svg width={20} height={20} fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 1a1 1 0 00-1.447-.894L8.763 4H5a3 3 0 100 6h.28l1.771 5.316A1 1 0 008 16h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 13V1z"
        fill="#00463E"
      />
    </svg>
  );
}

export default BasicInfoIcon;
