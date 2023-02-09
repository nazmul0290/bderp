import axios from "axios";

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

export const registration = (data) => {
  return axios.post(`${backendUrl}/register`, data, {
    headers: {
      Accept: "application/json",
    },
  });
};

export const createBusinessAccount = ({ account, token }) => {
  return axios.post(`${backendUrl}/v1/accounts`, account, {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};
