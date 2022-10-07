import { useEffect, useRef } from "react";

export default function Form() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <p>
        <input ref={inputRef} type="text" placeholder="Enter Something" />
      </p>
    </div>
  );
}
