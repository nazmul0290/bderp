/* eslint-disable react-hooks/rules-of-hooks */
import { removeUser, setUser } from "@/redux/resolvers/userSlice";
import { loginMutation } from "@/utils/resolvers/mutation";
import { useRouter } from "next/router";
import React from "react";
import { useMutation } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const useAuth = ({ redirectIfAuthenticated } = {}) => {
  const localStorageKey = process.env.NEXT_PUBLIC_LOCAL_STORAGE_KEY;
  const router = useRouter();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const loginController = async ({ variables, setFieldError, mutate }) => {
    console.log(variables);

    await mutate(variables, {
      onSuccess: async (data) => {
        const userDetails = data.data.data;
        sessionStorage.setItem(
          `${localStorageKey}token`,
          JSON.stringify(userDetails.token)
        );
        sessionStorage.setItem(
          `${localStorageKey}user`,
          JSON.stringify(userDetails.user)
        );
        dispatch(setUser({ token: userDetails.token, user: userDetails.user }));

        router.push(redirectIfAuthenticated);
      },
      onError: async (err) => {
        const errorData = err?.response.data;
        toast.error(errorData.message);
        Object.keys({ ...errorData?.errors }).map((key) => {
          setFieldError(key, errorData.errors[key][0]);
        });
      },
    });
  };

  const logout = async ({ mutate, token }) => {
    mutate(
      { token },
      {
        onSuccess: async (data) => {
          sessionStorage.removeItem(`${localStorageKey}token`);
          sessionStorage.removeItem(`${localStorageKey}user`);
          console.log("Before", user);
          dispatch(removeUser());
          console.log("After", user);

          router.push(redirectIfAuthenticated);
        },
        onError: async (err) => {
          console.log(err);
        },
      }
    );
  };

  const forgotPassword = ({ mutate, body }) => {
    mutate(
      { body },
      {
        onSuccess: async (data) => {
          console.log(data);
          toast.success(data.data.data, {
            position: "top-center",
          });
        },
        onError: async (err) => {
          console.log(err);
          toast.error(err.response.data.message, {
            position: "top-center",
          });
        },
      }
    );
  };

  const resetPassword = ({ mutate, body }) => {
    console.log(body);
    mutate(
      { body },
      {
        onSuccess: async (data) => {
          console.log(data);
        },
        onError: async (err) => {
          console.log(err);
        },
      }
    );
  };

  return { loginController, logout, forgotPassword, resetPassword };
};

export default useAuth;
