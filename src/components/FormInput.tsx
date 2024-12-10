import { FC, InputHTMLAttributes, useState } from "react";
import "../styles/formInput.scss";

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  errorMessage?: string;
}

const FormInput: FC<FormInputProps> = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, ...inputProps } = props;

  const handleBlur = () => {
    setFocused(true);
  };

  const handleFocus = () => {
    if (inputProps.name === "confirmPassword") {
      setFocused(true);
    }
  };

  return (
    <div className="formInput">
      <label>{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
        data-focused={focused.toString()}
      />
      <span>{errorMessage}</span>
    </div>
  );
};

export default FormInput;
