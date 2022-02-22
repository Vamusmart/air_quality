import React from 'react';
import { TextField, Button } from '@material-ui/core';

import useFormValidation from "./useFormValidation";
import validateAuth from "./validateAuth";

import { multiStepContext } from './StepContext';
import { useContext } from 'react';


const INITIAL_STATE = {
  good: { label: "", co2: "", pm: "", voc: "" },
  moderate: "",
  high: "",
};


function SecondStep() {
  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
    isSubmitting
  } = useFormValidation(INITIAL_STATE, validateAuth);


  const { userData, data, setData } = useContext(multiStepContext);


  const arrayMax = (arr) => {
    var len = arr.length, max = -Infinity;
    while (len--) {
      if (arr[len] > max) {

        max = arr[len];
      }
    }
    return max;
  };

  return (
    <div className="container">
      <h1 className='h1'>Smart indoor air quality</h1>
      <br></br><br></br>


      <TextField label="Site Name"
        value={userData.values['siteName']}
        margin='normal'
        variant='outlined'
        color='secondary'
        disabled /> <span></span>
      <TextField label="Reporter"
        value={userData.values['reporter']}
        margin='normal'
        variant='outlined'
        color='secondary'
        disabled /> <span></span>
      <TextField label="Created"
        value={userData.values['created']}
        margin='normal'
        variant='outlined'
        color='secondary'
        disabled /> <span></span>
      <TextField label="From"
        value={userData.values['from']}
        margin='normal'
        variant='outlined'
        color='secondary'
        disabled /> <span></span>

      <br></br>

      <form onSubmit={handleSubmit}>

        <label className='label'><b> Good </b></label>
        <input
          onChange={handleChange}
          onBlur={handleBlur}
          name="good"
          value={values.good}
          className={errors.good && "error-input"}
          autoComplete="off"
          placeholder="Enter Good Value "
          type='number'
        /><br></br>
        {errors.good && <p className="error-text">{errors.good}</p>}<br></br>

        <label className='label'><b> Moderate </b></label>
        <input
          onChange={handleChange}
          onBlur={handleBlur}
          name="moderate"
          value={values.moderate || ''}
          className={errors.moderate && "error-input"}
          autoComplete="off"
          placeholder="Enter Moderate Value"
          type='number'
        /><br></br>
        {errors.moderate && <p className="error-text">{errors.moderate}</p>}<br></br>

        <label className='label'><b> High </b></label>
        <input
          onChange={handleChange}
          onBlur={handleBlur}
          name="high"
          value={values.high || ''}
          className={errors.high && "error-input"}
          autoComplete="off"
          placeholder="Enter High Value "
          type='number'
        /><br></br>
        {errors.high && <p className="error-text">{errors.high}</p>}<br></br>

        <div className='button1'>
          <Button disabled={isSubmitting} type='submit' size='large'>
            <b>Submit</b>
          </Button>
        </div>

      </form>

    </div>
  );
}

export default SecondStep;
