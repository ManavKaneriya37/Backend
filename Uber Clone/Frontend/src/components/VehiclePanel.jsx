import React from 'react'

const VehiclePanel = (props) => {
  return (
    <div>
        <i class="ri-arrow-down-wide-line block absolute top-0 opacity-55 left-1/2 -translate-x-1/2 text-center text-3xl" onClick={() => {
          props.setVehiclePanel(false)
        }}></i>
        <h3 className="text-2xl font-semibold my-5">Choose a Vehicle</h3>
        <div onClick={() => {props.setConfirmRidePanel(true); 
          props.setVehiclePanel(false)}}
          className="flex items-center justify-between bg-gray-50 gap-1 my-3 border-2 border-gray-200/70 active:border-black rounded-xl px-2"
          >
          <div className="w-24 ">
            <img
              src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
              className="h-20 object-cover"
            />
          </div>
          <div className="w-1/2 p-2">
            <h4 className="font-semibold text-xl">
              UberGo{" "}
              <span className="text-lg font-normal">
                <i className="ri-user-fill text-black"></i>4
              </span>
            </h4>
            <h5 className="">2 mins away</h5>
            <p className="text-xs">Affordable, compact rides</p>
          </div>
          <h2 className="text-xl font-medium">₹193.20</h2>
        </div>
        <div onClick={() => {props.setConfirmRidePanel(true); 
          props.setVehiclePanel(false)}}
          className="flex items-center justify-between bg-gray-50 gap-1 my-3 border-2 border-gray-200/70 active:border-black rounded-xl px-2"
          >
          <div className="w-24 ">
            <img
              src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png"
              className="h-20object-cover"
            />
          </div>
          <div className="w-1/2 p-2">
            <h4 className="font-semibold text-xl">
              Moto{" "}
              <span className="text-lg font-normal">
                <i className="ri-user-fill text-black"></i>1
              </span>
            </h4>
            <h5 className="">6 mins away</h5>
            <p className="text-xs">Affordable motorcycle rides</p>
          </div>
          <h2 className="text-xl font-medium">₹86.50</h2>
        </div>
        <div onClick={() => {props.setConfirmRidePanel(true); 
          props.setVehiclePanel(false)}}
          className="flex items-center justify-between bg-gray-50 gap-1 my-3 border-2 border-gray-200/70 active:border-black rounded-xl px-2"
          >
          <div className="w-24 ">
            <img
              src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
              className="h-20 object-cover"
            />
          </div>
          <div className="w-1/2 p-2">
            <h4 className="font-semibold text-xl">
              UberAuto{" "}
              <span className="text-lg font-normal">
                <i className="ri-user-fill text-black"></i>3
              </span>
            </h4>
            <h5 className="">4 mins away</h5>
            <p className="text-xs">Affordable, compact rides</p>
          </div>
          <h2 className="text-xl font-medium">₹105.00</h2>
        </div>
    </div>
  )
}

export default VehiclePanel