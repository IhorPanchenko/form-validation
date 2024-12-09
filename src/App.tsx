import FormInput from "./components/FormInput";
import "../src/styles/app.scss";
import { inputs } from "./formInputs";
import { useState, FC, FormEvent, ChangeEvent } from "react";

const App: FC = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  // Dynamically set the pattern for confirmPassword based on values.password
  const updatedInputs = inputs.map((input) => {
    if (input.name === "confirmPassword") {
      return { ...input, pattern: values.password };
    }
    return input;
  });

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
