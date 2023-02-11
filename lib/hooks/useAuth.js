import { setUser } from "@/redux/resolvers/userSlice";
import isEmpty from "@/utils/is-empty";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const AuthUser = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  console.log(user);
  useEffect(() => {
    if (isEmpty(user)) {
      console.log("I am from localStorage");
      const storedUserData = localStorage.getItem("BDERP_register");
      if (storedUserData) {
        dispatch(setUser(JSON.parse(storedUserData)));
      }
    }
  }, [dispatch, user]);
  console.log("I am calling");

  return user;
};
