interface InputField {
  name: string;
  type: string;
  placeholder: string;
  label: string;
}

export const inputs: InputField[] = [
  {
    name: "username",
    type: "text",
    placeholder: "Username",
    label: "Username",
  },
  {
    name: "email",
    type: "text",
    placeholder: "Email",
    label: "Email",
  },
  {
    name: "birthday",
    type: "text",
    placeholder: "Birthday",
    label: "Birthday",
  },
  {
    name: "password",
    type: "password",
    placeholder: "Password",
    label: "Password",
  },
  {
    name: "confirmPassword",
    type: "password",
    placeholder: "Confirm Password",
    label: "Confirm Password",
  },
];
