import React, { useState } from 'react';
import App from '../App';

export const multiStepContext = React.createContext();


const StepContext = () => {

  const [currentStep, setCurrentStep] = useState(1);
  const [userData, setUserData] = useState([]);
  const [data, setData] = useState([]);

  return (
    <div>
      <multiStepContext.Provider
        value={{

          currentStep,
          setCurrentStep,
          userData,
          setUserData,
          data,
          setData,

        }}>
        <App />
      </multiStepContext.Provider>
    </div>
  )
}
export default StepContext;
