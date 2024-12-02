import React from "react";

const LocationSearchPanel = (props) => {
  const locations = [
    "11A, ABC Road, Near DEF GHI School, JKL City",
    "11D, ABC Road, Near DEF GHI School, JKL City",
    "11B, ABC Road, Near DEF GHI School, JKL City",
    "11C, ABC Road, Near DEF GHI School, JKL City",
    "12D, ABC Road, Near DEF GHI School, JKL City",
    "12D, ABC Road, Near DEF GHI School, JKL City",
    "12C, ABC Road, Near DEF GHI School, JKL City",
  ];

  return (
    <div className="mt-4 overflow-y-scroll h-full">
      {locations.map((elem, idx) => (
        <div
          key={idx}
          className="flex items-center mb-2 mx-2 justify-start gap-5 active:border-[1px] p-3 active:border-black rounded-xl"
          onClick={() => {
            props.setVehiclePanel(true)
            props.SetPanelOpen(false)
        }}
        >
          <h2 className="bg-[#eee] h-10 rounded-full w-12 flex items-center justify-center">
            <i class="ri-map-pin-line"></i>
          </h2>
          <h4>{elem}</h4>
        </div>
      ))}
    </div>
  );
};

export default LocationSearchPanel;
