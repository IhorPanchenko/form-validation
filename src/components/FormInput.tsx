import { FC, InputHTMLAttributes } from "react";
import "../styles/formInput.scss";

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const FormInput: FC<FormInputProps> = (props) => {
  const { label, onChange, ...inputProps } = props;

  return (
    <div className="formInput">
      <label>{label}</label>
      <input {...inputProps} onChange={onChange} />
    </div>
  );
};

export default FormInput;
