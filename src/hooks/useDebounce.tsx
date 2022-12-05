import { useEffect, useState } from "react";

function useDebounce(value:string, delay:number) {
  const [debounceValue, setDebounceValue] = useState("");
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(value);
    }, delay);
    return () => clearTimeout(timer);
  }, [value]);
  return debounceValue;
}

export default useDebounce;
