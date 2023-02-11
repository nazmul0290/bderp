import { setUser } from "@/redux/resolvers/userSlice";
import isEmpty from "@/utils/is-empty";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const useUser = () => {
  const localStorageKey = process.env.NEXT_PUBLIC_LOCAL_STORAGE_KEY;
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    if (isEmpty(user.token)) {
      const storedUserData = localStorage.getItem(`${localStorageKey}user`);
      const storedToken = localStorage.getItem(`${localStorageKey}token`);

      if (storedUserData) {
        dispatch(
          setUser({
            user: JSON.parse(storedUserData),
            token: JSON.parse(storedToken),
          })
        );
      }
    }
  }, [user]);
  return user;
};

export default useUser;
