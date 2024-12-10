import FormInput from "./components/FormInput";
import "../src/styles/app.scss";
import { inputs } from "./formInputs";
import { useState, useMemo, FC, FormEvent, ChangeEvent } from "react";

type FormValues = {
  username: string;
  email: string;
  birthday: string;
  password: string;
  confirmPassword: string;
};

const App: FC = () => {
  const [values, setValues] = useState<FormValues>({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const errors = updatedInputs.map((input) =>
      validateInput(input.name, values[input.name as keyof FormValues])
    );
    if (errors.some((error) => error)) {
      alert("Please fix errors before submitting.");
      return;
    }
    alert("Form submitted successfully!");
  };

  const validateInput = (name: string, value: string): string => {
    if (name === "confirmPassword" && value !== values.password) {
      return "Passwords do not match!";
    }
    return "";
  };

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  // Dynamically set the pattern for confirmPassword based on values.password
  const updatedInputs = useMemo(
    () =>
      inputs.map((input) =>
        input.name === "confirmPassword"
          ? { ...input, pattern: values.password }
          : input
      ),
    [values.password]
  );

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {updatedInputs.map((input) => (
          <FormInput
            key={input.name}
            {...input}
            value={values[input.name as keyof typeof values]}
            onChange={handleOnChange}
          />
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
