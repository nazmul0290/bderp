import * as yup from "yup";

const validationSchemaList = {
  firstName: yup
    .string("Enter your First Name")
    .matches(/^[a-zA-Z\s]+$/, "Only letters and spaces are allowed")
    .required("First Name is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      "Password must contain at least 8 characters, one uppercase, one number and one special case character"
    )
    .required("Password is required"),
  lastName: yup
    .string("Enter Your last name")
    .matches(/^[a-zA-Z\s]+$/, "Only letters and spaces are allowed")
    .required("Last name is required!"),

  email: yup
    .string()
    .email("Must be a valid email")
    .max(255)
    .required("Email is required"),
  countryName: yup.object().required("Must select a country"),
  companyName: (required) => {
    const validate = yup
      .string()
      .matches(
        /^[a-zA-Z]{3,256}$/,
        "Only letters, digits and @ symbol are allowed"
      );

    if (required) return validate.required("Company Name is required!");
    return validate;
  },
};

const { companyName, countryName, email, firstName, lastName, password } =
  validationSchemaList;

export const signUpValidationSchema = yup.object({
  firstName,
  password,
  lastName,
  email,
  countryName,
  companyName: companyName(),
});

export const businessTypeValidationSchema = yup.object({
  company_name: companyName(true),
});

export const loginYupValidation = yup.object({
  email,
  password,
});
