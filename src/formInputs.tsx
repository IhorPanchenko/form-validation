interface InputField {
  name: string;
  type: string;
  placeholder: string;
  errorMessage?: string;
  label: string;
  pattern?: string;
  required: boolean;
}

export const inputs: InputField[] = [
  {
    name: "username",
    type: "text",
    placeholder: "Username",
    errorMessage:
      "Username should be 3-16 characters and shouldn't include any special characters!",
    label: "Username",
    pattern: "^[A-Za-z0-9]{3,16}$",
    required: true,
  },
  {
    name: "email",
    type: "email",
    placeholder: "Email",
    errorMessage: "Please enter a valid email address!",
    label: "Email",
    required: true,
  },
  {
    name: "birthday",
    type: "date",
    placeholder: "Birthday",
    label: "Birthday",
    required: false,
  },
  {
    name: "password",
    type: "password",
    placeholder: "Password",
    errorMessage:
      "Password should be 8-20 characters and include at least 1 letter, 1 number, and 1 special character!",
    label: "Password",
    pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
    required: true,
  },
  {
    name: "confirmPassword",
    type: "password",
    placeholder: "Confirm Password",
    errorMessage: "Passwords don't match!",
    label: "Confirm Password",
    // pattern: "",
    required: true,
  },
];
