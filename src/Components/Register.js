import React from "react";


import useFormValidation from "./useFormValidation";
import validateAuth from "./validateAuth";

import { Button } from '@material-ui/core';


import { multiStepContext } from './StepContext';
import { useContext } from 'react';


const INITIAL_STATE = {
  siteName: "",
  reporter: "",
  created: "",
  from: ""
};

function Register() {
  const {
    handleContinue,
    handleChange,
    handleBlur,
    values,
    errors,
    isSubmitting
  } = useFormValidation(INITIAL_STATE, validateAuth);

  const { userData, data, setCurrentStep } = useContext(multiStepContext);

  // console.log(data);
  return (
    <div className="container">
      <h1 className='h1'>Smart indoor air quality</h1>
      <br></br>
      <form onSubmit={handleContinue}>

        <label className='label'><b>Location</b></label>
        <input
          onChange={handleChange}
          onBlur={handleBlur}
          name="siteName"
          value={values.siteName}
          className={errors.siteName && "error-input"}
          autoComplete="off"
          placeholder="Enter Site Name"
        /><br></br>
        {errors.siteName && <p className="error-text">{errors.siteName}</p>}<br></br>

        <label className='label'><b>Compiled by</b></label>
        <input
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.reporter}
          className={errors.reporter && "error-input"}
          name="reporter"
          type="text"
          placeholder="Enter Reporter Name"
        /><br></br>
        {errors.reporter && <p className="error-text">{errors.reporter}</p>}<br></br>

        <label className='label'><b>Compiled on</b></label>
        <input
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.created}
          className={errors.created && "error-input"}
          name="created"
          type="text"
          placeholder="Enter Created Date "
        /><br></br>
        {errors.created && <p className="error-text">{errors.created}</p>}<br></br>

        <label className='label'><b>Monitoring period</b></label>
        <input
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.from}
          className={errors.from && "error-input"}
          name="from"
          type="text"
          placeholder="Enter From - To Date"
        /><br></br>
        {errors.from && <p className="error-text">{errors.from}</p>}<br></br>

        <div className="button1">
          <Button Variant='outlined' disabled={isSubmitting} type='submit' size='large' >
            <b>Continue</b>
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Register;
