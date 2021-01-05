import * as React from "react";

function ListResponder(props) {
  return (
    <svg viewBox="0 0 24 24" width={20} height={20} fill="none" {...props}>
      <path
        d="M4 18H11M4 6H20H4ZM4 12H20H4Z"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default ListResponder;
