import { useEffect, useState, useRef } from "react";

function useClickOutside() {
  const [outside, setOutside] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setOutside(true);
      } else {
        setOutside(false);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return { ref, outside };
}

export default useClickOutside;
