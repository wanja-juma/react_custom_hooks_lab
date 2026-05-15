import { useEffect, useState } from "react";

function useLocalStorage(
  key,
  initialValue = null
) {

  /*
    Initialize state using
    localStorage value
    or fallback initialValue
  */
  const [value, setValue] = useState(() => {

    const storedValue =
      localStorage.getItem(key);

    return storedValue !== null
      ? storedValue
      : initialValue;
  });

  /*
    Save updated value
    into localStorage
  */
  useEffect(() => {

    localStorage.setItem(
      key,
      value
    );

  }, [key, value]);

  /*
    Return state and setter
  */
  return [value, setValue];
}

export default useLocalStorage;