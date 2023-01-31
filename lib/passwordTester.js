export const containsUpperAndLowercase = (str) => {
  return /[A-Z]/.test(str) && /[a-z]/.test(str);
};

export const containsNumber = (str) => {
  return /\d/.test(str);
};

export const containsSpecialChars = (str) => {
  return /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(str);
};
