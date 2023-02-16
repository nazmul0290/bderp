import * as yup from "yup";

const validationSchemaList = {
  first_name: yup
    .string("Enter your First Name")
    .matches(/^[a-zA-Z ]{3,}$/, "Must have at least 3 letters")
    .required("First Name is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      "Password must contain at least 8 characters, one uppercase, one number and one special case character"
    )
    .required("Password is required"),
  last_name: yup
    .string("Enter Your last name")
    .matches(/^[a-zA-Z ]{3,}$/, "Must have at least 3 letters")
    .required("Last name is required!"),

  email: yup
    .string()
    .email("Must be a valid email")
    .max(255)
    .required("Email is required"),
  country: yup.object().required("Must select a country"),
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
  privacy_aggrement: yup
    .boolean()
    .oneOf([true], "You must accept the privacy policy to continue")
    .required("Please accept the privacy policy to continue"),

  invoice_item_name: yup.string().required("Must have name"),
  invoice_item_quantity: yup.number().min(1).required("Must have quantity"),
  invoice_item_unit_price: yup.number().min(1).required("Must have Unit Price"),
  required: yup.string().required("Must be need "),
};

const {
  companyName,
  country,
  email,
  first_name,
  last_name,
  password,
  privacy_aggrement,
  invoice_item_name,
  invoice_item_quantity,
  invoice_item_unit_price,
  required,
} = validationSchemaList;

export const invoiceItemsValidationSchema = yup.object({
  product_name: invoice_item_name,
  product_qty: invoice_item_quantity,
  unit_price: invoice_item_unit_price,
});

export const itemTaxValidationSchema = yup.object({
  name: first_name,
  tax: invoice_item_quantity,
});

export const signUpValidationSchema = yup.object({
  first_name,
  password,
  last_name,
  email,
  country,
  company_name: companyName(),
  privacy_aggrement,
});

export const businessTypeValidationSchema = yup.object({
  company_name: companyName(true),
});

export const loginYupValidation = yup.object({
  email,
});

export const forgotYupValidation = yup.object({
  email,
});

export const resetPasswordValidation = yup.object({
  password,
  password_confirmation: password,
});

export const invoiceDetailsValidation = yup.object({
  invoice_number: required,
});
