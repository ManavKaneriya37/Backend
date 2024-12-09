import axios from "axios";
import React, { useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "remixicon/fonts/remixicon.css";

const OTP = () => {
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const [OTP, setOTP] = useState("");

  const [verifiedOTP, setVerifiedOTP] = useState(false);
  const [error, setError] = useState(false);
  const location = useLocation();
  const { email } = location.state || {};

  const navigate = useNavigate();

  const handleChange = (index) => (event) => {
    const value = event.target.value;
    setOTP((prev) => (prev += value));

    if (value.length === 1 && index < inputRefs.length - 1) {
      inputRefs[index + 1].current.focus();
    }
  };

  const handleBack = (index) => (event) => {
    if (event.key === "Backspace") {
      event.preventDefault();
      event.target.value = "";
      setOTP((prev) => prev.slice(0, -1)); 
      if (index > 0) {
        inputRefs[index - 1].current.focus();
      }
    }
  };

  const verifyOTP = async () => {
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/verify-otp`,
      { email, OTP }
    );

    if (response.status === 200) {
      setVerifiedOTP(true);
      navigate('/dashboard');
    } else {
      setError(true);
    }
  };

  console.log(OTP);

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
        <button
          onClick={verifyOTP}
          className="w-32 h-10 bg-emerald-500 hover:bg-emerald-600 duration-150 text-white rounded mt-4"
        >
          Verify OTP
        </button>

        <h1 className="text-green-500 text-base">
          {verifiedOTP ? "Verified OTP successfully!" : null}
        </h1>
        <h1 className="text-red-500 text-sm">
          {error ? "OTP is wrong or expired" : null}
        </h1>
      </div>
    </div>
  );
};

export default OTP;