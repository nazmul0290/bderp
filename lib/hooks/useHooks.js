import { useEffect, useState } from "react";

export const useCountries = (key, countryValues) => {
  const [value, setValue] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem(key);
    if (stored) {
      setValue(JSON.parse(stored));
    } else {
      localStorage.setItem(key, JSON.stringify(countryValues));
    }
  }, [countryValues, key]);

  return [value, setValue];
};
