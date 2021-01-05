import * as React from "react";

function Info(props) {
  return (
    <svg width={20} height={20} fill="none" {...props}>
      <path
        d="M10.833 13.333H10V10h-.833l1.666 3.333zM10 6.667h.008H10zM17.5 10a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"
        stroke="#00463E"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default Info;
