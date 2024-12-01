import React, { useState } from "react";
import { Link } from "react-router-dom";

const CaptianSignup = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [color, setColor] = useState('')
  const [plate, setPlate] = useState('');
  const [capacity, setCapacity] = useState();
  const [vehicleType, SetVehicleType] = useState('');
  

  const handleSubmit = (e) => {
    e.preventDefault();

    setUserData({
      fullname: {
        firstname: firstname,
        lastname: lastname,
      },
      email: email,
      password: password,
      vehicle:{
        color: color,
        plate: plate,
        capacity: capacity,
        vehicleType: vehicleType
      }
    });

    setFirstname("");
    setLastname("");
    setEmail("");
    setPassword("");
    setColor("")
    setPlate("")
    setCapacity("")
    SetVehicleType("")
  };

  return (
    <div className="h-screen w-full flex flex-col justify-between p-2">
      <div>
        <h1 className="text-[32px] font-medium tracking-tight p-5">
          Uber<i class="ri-arrow-right-line"></i>
        </h1>

        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
          className="px-4"
        >
          <h3 className="text-lg font-medium mb-2">What's your name</h3>
          <div className="flex items-center gap-2 mb-3">
            <input
              type="text"
              value={firstname}
              required
              onChange={(e) => setFirstname(e.target.value)}
              className="bg-[#eeeeee] placeholder:text-base placeholder:font-thin border px-2 outline-1 outline-neutral-300 py-2 text-lg font-medium rounded w-full"
              placeholder="Firstname"
            />
            <input
              type="text"
              value={lastname}
              required
              onChange={(e) => setLastname(e.target.value)}
              className="bg-[#eeeeee] placeholder:text-base placeholder:font-thin border px-2 outline-1 outline-neutral-300 py-2 text-lg font-medium rounded w-full"
              placeholder="Lastname"
            />
          </div>

          <h3 className="text-lg font-medium my-1">What's your email</h3>
          <input
            type="email"
            placeholder="Login email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            className="bg-[#eeeeee] placeholder:text-base placeholder:font-thin border px-2 outline-1 outline-neutral-300 py-2 text-lg font-medium rounded w-full"
          />

          <h3 className="text-lg font-medium mt-2 mb-2">Enter Password</h3>
          <input
            type="password"
            placeholder="password"
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="bg-[#eeeeee] placeholder:text-base placeholder:font-thin border px-2 outline-1 outline-neutral-300 py-2 text-lg font-medium rounded w-full"
          />

          <div className="flex items-center gap-2 my-2">
            <div>
              <h3 className="text-lg font-medium">Color</h3>
              <input
                required
                type="text"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                className="bg-[#eeeeee] placeholder:text-base placeholder:font-thin border px-2 outline-1 outline-neutral-300 py-2 text-lg font-medium rounded w-full"
                placeholder="Vehicle Color"
              />
            </div>

            <div>
              <h3 className="text-lg font-medium">Plate</h3>
              <input
                required
                type="text"
                value={plate}
                onChange={(e) => setPlate(e.target.value)}
                className="bg-[#eeeeee] placeholder:text-base placeholder:font-thin border px-2 outline-1 outline-neutral-300 py-2 text-lg font-medium rounded w-full"
                placeholder="MH01MH1234"
              />
            </div>
          </div>
          <div className="flex items-center gap-2 my-2">
            <div>
              <h3 className="text-lg font-medium">Capacity</h3>
              <input
                required
                type="number"
                value={capacity}
                onChange={(e) => setCapacity(e.target.value)}
                className="bg-[#eeeeee] placeholder:text-base placeholder:font-thin border px-2 outline-1 outline-neutral-300 py-2 text-lg font-medium rounded w-full"
                placeholder="Seats"
              />
            </div>

            <div>
              <h3 className="text-lg font-medium">Type</h3>
              <select
                className="bg-[#eeeeee] border px-2 outline-1 outline-neutral-300 py-2 text-lg font-normal rounded w-full"
                required
                value={vehicleType}
                onChange={(e) => SetVehicleType(e.target.value)}
              >
                <option value="">Select Vehicle Type</option>
                <option value="auto">Auto</option>
                <option value="motorcycle">Motorcycle</option>
                <option value="car">Car</option>
              </select>
            </div>
          </div>

          <button
            to=""
            className="block bg-black text-white rounded w-full mt-8 py-2 text-center text-xl font-medium"
          >
            Sign up
          </button>

          <p className="text-center mt-4 text-[16px]">
            Already have a Captain Account?{" "}
            <Link to="/captain-login" className="text-blue-500">
              Login
            </Link>
          </p>
        </form>
      </div>

      <p className="text-center my-1 text-[11px]">
        By signing up as an Uber Captain, you agree to Uber's{" "}
        <Link to="" className="text-blue-500">
          Terms of Service
        </Link>
        ,{" "}
        <Link to="" className="text-blue-500">
          Conditions of Use
        </Link>
        , and{" "}
        <Link to="" className="text-blue-500">
          Privacy Policy
        </Link>
      </p>
    </div>
  );
};

export default CaptianSignup;
