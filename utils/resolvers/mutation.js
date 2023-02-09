import axios from "axios";

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

export const registration = (data) => {
  return axios.post(`${backendUrl}/register`, data, {
    headers: {
      Accept: "application/json",
    },
  });
};

export const loginMutation = (credential) => {
  return axios.post(`${backendUrl}/login`, credential, {
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

export const resendEmail = (token) => {
  return axios.post(
    `${backendUrl}/email/verification-notification`,
    {},
    {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const addBusinessTypeInAccount = ({
  businessTypes,
  accountUuid,
  token,
}) => {
  return axios.post(
    `${backendUrl}/v1/accounts/${accountUuid}/businesstype`,
    businessTypes,
    {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
};
