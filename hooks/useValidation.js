
import React, { useState, useEffect } from 'react';

const useValidation = (stateInicial, validation, fn) => {
  const [values, setValues] = useState(stateInicial);
  const [errors, setErrors] = useState({});
  const [submitForm, setSubmitForm] = useState(false);

  useEffect(() => {
    if(submitForm){
      const noErrors = Object.keys(errors).length === 0;
      if(noErrors){
        fn();
      }
      setSubmitForm(false);
    }
  }, [errors])


  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const errorsValidation = validation(values);
    setErrors(errorsValidation);
    setSubmitForm(true);
  }

  const handleBlur = () => {
    const errorsValidation = validation(values);
    setErrors(errorsValidation);
  }

  return {
    values,
    errors,
    submitForm,
    handleChange,
    handleSubmit,
    handleBlur
  }
}


 
export default useValidation;