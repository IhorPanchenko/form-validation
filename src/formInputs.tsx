interface InputField {
  name: string;
  type: string;
  placeholder: string;
  errorMessage: string;
  label: string;
}

export const inputs: InputField[] = [
  {
    name: "username",
    type: "text",
    placeholder: "Username",
    errorMessage:
      "Username should be 3-16 characters and shouldn't include any special characters!",
    label: "Username",
  },
  {
    name: "email",
    type: "text",
    placeholder: "Email",
    errorMessage: "Please enter a valid email address!",
    label: "Email",
  },
  {
    name: "birthday",
    type: "date",
    placeholder: "Birthday",
    errorMessage: "Please enter your birthday in DD/MM/YYYY format!",
    label: "Birthday",
  },
  {
    name: "password",
    type: "password",
    placeholder: "Password",
    errorMessage:
      "Password should be 8-20 characters and include at least 1 letter, 1 number, and 1 special character!",
    label: "Password",
  },
  {
    name: "confirmPassword",
    type: "password",
    placeholder: "Confirm Password",
    errorMessage: "Passwords don't match!",
    label: "Confirm Password",
  },
];
