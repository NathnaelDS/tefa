import * as React from "react";

function UserResponder(props) {
  return (
    <svg viewBox="0 0 24 24" width={20} height={20} fill="none" {...props}>
      <path
        d="M16 7C16 8.06087 15.5786 9.07828 14.8284 9.82843C14.0783 10.5786 13.0609 11 12 11C10.9391 11 9.92172 10.5786 9.17157 9.82843C8.42143 9.07828 8 8.06087 8 7C8 5.93913 8.42143 4.92172 9.17157 4.17157C9.92172 3.42143 10.9391 3 12 3C13.0609 3 14.0783 3.42143 14.8284 4.17157C15.5786 4.92172 16 5.93913 16 7V7ZM12 14C10.1435 14 8.36301 14.7375 7.05025 16.0503C5.7375 17.363 5 19.1435 5 21H19C19 19.1435 18.2625 17.363 16.9497 16.0503C15.637 14.7375 13.8565 14 12 14V14Z"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default UserResponder;
