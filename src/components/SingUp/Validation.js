import * as yup from "yup";

const validations = yup.object().shape({
  name: yup
    .string()
    .required("This area must be filled"),
  age: yup
    .number()
    .required("This area must be filled")
	.positive()
	.integer(),
  email: yup
    .string()
    .email("Enter a valid email adress...")
    .required("This area must be filled"),
  password: yup
    .string()
    .min(5, "enter a valid email adress...")
    .required("This area must be filled"),
  passwordCheck: yup
    .string()
    .oneOf([yup.ref("password")], "Password is not matched")
    .required("This area must be filled"),
});

export default validations;
