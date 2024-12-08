import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "remixicon/fonts/remixicon.css";

const Home = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handlesubmit = (event) => {
    event.preventDefault();

    if(phoneNumber.length != 10) {
        setError(true);
        return;
    }
    
    navigate('/otp')
  };
  return (
    <div className="h-screen w-full">
      <div className="flex flex-col justify-center items-center h-full">
        <form onSubmit={handlesubmit}>
          <input
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            type="number"
            className="border-2 w-64 h-10 border-zinc-700/70 px-4 outline-none rounded py-1"
            placeholder="Enter Phone Number"
          />
          <h1 className="mb-5 text-red-500 text-sm">{error ? "*Enter valid phone number" : null}</h1>
          <button className="h-10 w-64 text-xl flex items-center justify-center bg-emerald-600 hover:bg-emerald-500 duration-150 rounded-lg text-white">
            Get OTP <i className="ri-arrow-right-line"></i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Home;
