import * as yup from "yup";

export const signupSchema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup.string().required("Email is required"),
  password: yup
    .string()
    .min(8, "Must Contain 8 Characters")
    .required("Password is required")
    .matches(/^(?=.*[A-Z])/, "  Must Contain One Uppercase Character")
    .matches(
      /^(?=.*[!@#\$%\^&\*])/,
      "  Must Contain  One Special Case Character"
    ),
});
