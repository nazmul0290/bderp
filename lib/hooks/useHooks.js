/* eslint-disable react-hooks/rules-of-hooks */
import { addUser } from "@/redux/resolvers/userSlice";
import isEmpty from "@/utils/is-empty";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const useLocalStorage = (key, fallBackValue) => {
  const [value, setValue] = useState([]);
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem(key));
    const appVersion = process.env.NEXT_PUBLIC_VERSION;
    if (stored && stored.version === appVersion) {
      console.log("I am from localhost");
      setValue(stored.data);
    } else {
      console.log("Api calling");

      fallBackValue()
        .then((res) => {
          localStorage.setItem(
            key,
            JSON.stringify({
              version: appVersion,
              data: [...res.data.data],
            })
          );
          setValue([...res.data.data]);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [fallBackValue, key]);
  return [value, setValue];
};

export const useToken = (key) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    const token = localStorage.getItem(key);
    if (token) setToken(token);
  }, []);

  return [token, setToken];
};
