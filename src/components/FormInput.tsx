import { FC } from "react";
import "../styles/formInput.scss";

interface FormInputProps {
  placeholder: string;
}

const FormInput: FC<FormInputProps> = (props) => {
  return (
    <div className="formInput">
      {/* <label>Username</label> */}
      <input placeholder={props.placeholder} />
    </div>
  );
};

export default FormInput;
