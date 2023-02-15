import { useState } from 'react';
import './FormInput.css';
const FormInput = (props) => {
  const [inputGotBlur, setInputGotBlur] = useState(false);
  const handleOnBlur = () => {
    setInputGotBlur(true);
  };
  const { id, label, errorMessage, ...inputProps } = props;
  return (
    <div className="form-input">
      <label>{label}</label>
      <input
        {...inputProps}
        onBlur={handleOnBlur}
        inputgotblur={inputGotBlur.toString()}
        onFocus={
          inputProps.name === 'confirmPassword' ? handleOnBlur : undefined
        }
      />
      <span>{errorMessage}</span>
    </div>
  );
};

export default FormInput;
