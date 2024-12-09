import { FC, InputHTMLAttributes } from "react";
import "../styles/formInput.scss";

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  errorMessage?: string;
}

const FormInput: FC<FormInputProps> = (props) => {
  const { label, errorMessage, onChange, ...inputProps } = props;

  return (
    <div className="formInput">
      <label>{label}</label>
      <input {...inputProps} onChange={onChange} />
      <span>{errorMessage}</span>
    </div>
  );
};

export default FormInput;
