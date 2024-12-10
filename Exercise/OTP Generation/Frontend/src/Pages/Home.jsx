import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import "remixicon/fonts/remixicon.css";
import axios from 'axios'
const Home = () => {

  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);


  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/generate-otp`, {email});

    if(response.status === 200) {
      navigate("/otp", { state: { email } });
    }
    else {
      setError(true);
    }
  };

  // const [phoneNumber, setPhoneNumber] = useState("");

 
  return (
    <div className="h-screen w-full">
      <div className="flex flex-col justify-center items-center h-full">
        {isLoading ? (
          <Loading loading={isLoading}/>
        ) : (
          <form onSubmit={handleSubmit}>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="border-2 w-64 h-10 border-zinc-700/70 px-4 outline-none rounded py-1 my-2"
            placeholder="Enter your email"
          />
          <button className="h-10 w-64 text-xl flex items-center justify-center bg-emerald-600 hover:bg-emerald-500 duration-150 rounded-lg text-white">
            Get OTP <i className="ri-arrow-right-line"></i>
          </button>
          <h1 className="block text-sm mb-2 text-red-500">{error ? "Something went wrong" : null}</h1>
        </form>
        )}
      </div>
    </div>
  );
};

export default Home;
