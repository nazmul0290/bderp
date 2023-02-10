import axios from "axios";

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

export const getCountries = () => {
  return axios.get(`${backendUrl}/v1/countries`, {
    headers: {
      Accept: "application/json",
    },
  });
};

export const emailVerify = ({
  userId,
  token,
  expire_at,
  signature,
  bearerToken,
}) => {
  return axios.get(
    `${backendUrl}/email/verify/${userId}/${token}?expires=${expire_at}&signature=${signature}`,
    {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${bearerToken}`,
      },
    }
  );
};

export const businessTypes = () => {
  return axios.get(`${backendUrl}/v1/businesstypes`, {
    headers: {
      Accept: "application/json",
    },
  });
};

export const getTableFeaturePlan = () => {
  return axios.get(`${backendUrl}/v1/features/plan`, {
    headers: {
      Accept: "application/json",
    },
  });
};
