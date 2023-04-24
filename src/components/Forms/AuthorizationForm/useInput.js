import { useState } from 'react';

import { useValidation } from './useValidation';

export const useInput = (initialValue, validations) => {
  const [value, setValue] = useState(initialValue);
  const [isDirty, setIsDirty] = useState();
  const valid = useValidation(value, validations);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onBlur = (e) => {
    setIsDirty(true);
  };

  const renderError = () => {
    if (isDirty && valid.isEmpty) {
      return (
        <div className="input__error-message">The field cannot be empty</div>
      );
    }
    if (isDirty && valid.minLengthError) {
      return <div className="input__error-message">Enter more characters</div>;
    }
    if (isDirty && valid.emailError) {
      return <div className="input__error-message">Incorrect e-mail</div>;
    }
    if (isDirty && valid.maxLengthError) {
      return <div className="input__error-message">Too many characters</div>;
    }
  };

  return {
    value,
    onChange,
    onBlur,
    isDirty,
    inputValid: valid.isValid,
    error: renderError(),
    ...valid,
  };
};
