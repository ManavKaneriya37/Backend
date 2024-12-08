import React, { useRef } from "react";
import "remixicon/fonts/remixicon.css";

const OTP = () => {
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const handleChange = (index) => (event) => {
    const value = event.target.value;

    if (value.length === 1 && index < inputRefs.length - 1) {
      inputRefs[index + 1].current.focus();
    }

  };

  const handleBack = (index) => (event) => {
    if(event.key === 'Backspace') {
        event.target.value = '';
        
        if(index > 0 ) {
            inputRefs[index - 1].current.focus();
        }
    }
  }

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-center my-6 text-2xl">Enter OTP</h1>
        <div className="flex space-x-4">
          {inputRefs.map((ref, index) => (
            <input
              key={index}
              type="text" 
              className="p-2 w-14 h-14 border-2 border-gray-900/30 rounded-lg text-center text-2xl"
              ref={ref}
              onChange={handleChange(index)}
              onKeyDown={handleBack(index)}
              maxLength={1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OTP;