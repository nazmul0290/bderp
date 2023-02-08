import { useEffect, useState } from "react";

export const useLocalStorage = (key, fallBackValue) => {
  const [value, setValue] = useState([]);
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem(key));
    const appVersion = process.env.NEXT_PUBLIC_VERSION;
    if (stored && stored.version === appVersion) {
      setValue(stored.data);
    } else {
      localStorage.setItem(
        key,
        JSON.stringify({
          version: appVersion,
          data: fallBackValue,
        })
      );
    }
  }, [fallBackValue, key]);
  return [value, setValue];
};
