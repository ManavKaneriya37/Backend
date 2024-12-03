import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import LocationSearchPanel from "../components/LocationSearchPanel";
import VehiclePanel from "../components/VehiclePanel";
import ConfirmRide from "../components/ConfirmRide";
import LookingForDriver from "../components/LookingForDriver";
import WaitingForDriver from "../components/WaitingForDriver";

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [desitnation, SetDesitnation] = useState("");

  const [panelOpen, SetPanelOpen] = useState(false); // Open/Close handler
  const panelRef = useRef(null); // Reference to the locations panel for for handling the open and closing
  const panelCloseRef = useRef(null); // Down Arrow for closing the open locations panel

  const [vehiclePanel, setVehiclePanel] = useState(false);
  const vehiclePanelRef = useRef(null);

  const [confirmRidePanel, setConfirmRidePanel] = useState(false); // Confirming ride panel for user
  const confirmRidePanelRef = useRef(null);

  const [lookingForDriver, setLookingForDriver] = useState(false); // Captain scanner page that shows for finding the driver
  const lookingForDriverRef = useRef(null);

  const [waitingForDriver, setWaitingForDriver] = useState(false); // Driver details panel which seen during the rinding
  const waitingForDriverRef = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  useGSAP(
    function () {
      if (panelOpen) {
        gsap.to(panelRef.current, {
          height: "70vh",
          // opacity: 1,
        });
        gsap.to(panelCloseRef.current, {
          opacity: 1,
        });
      } else {
        gsap.to(panelRef.current, {
          height: "0%",
          // opacity: 0,
        });
        gsap.to(panelCloseRef.current, {
          opacity: 0,
        });
      }
    },
    [panelOpen]
  );
  useGSAP(
    function () {
      if (vehiclePanel) {
        gsap.to(vehiclePanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(vehiclePanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [vehiclePanel]
  );
  useGSAP(
    function () {
      if (confirmRidePanel) {
        gsap.to(confirmRidePanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(confirmRidePanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [confirmRidePanel]
  );
  useGSAP(
    function () {
      if (lookingForDriver) {
        gsap.to(lookingForDriverRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(lookingForDriverRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [lookingForDriver]
  );
  useGSAP(
    function () {
      if (waitingForDriver) {
        gsap.to(waitingForDriverRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(waitingForDriverRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [waitingForDriver]
  );

  return (
    <div className="h-screen relative overflow-hidden">
      <h1 className="absolute top-5 left-5 text-3xl font-medium">Uber</h1>

      {/* Map  */}
      <div className="h-screen w-screen">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt="map"
        />
      </div>

      {/* Pickup and Destination for with address */}
      <div className="flex flex-col justify-end w-full absolute top-0 h-screen">
        <section className="h-[30vh] bg-white py-2 px-5 relative">
          <i
            ref={panelCloseRef}
            onClick={() => SetPanelOpen(false)}
            className="ri-arrow-down-wide-line text-center font-medium text-3xl block w-full"
          ></i>
          <h4 className="text-2xl font-semibold">Find a trip</h4>
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <input
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              onClick={() => SetPanelOpen(true)}
              className="w-full bg-[#eee] mb-3 mt-5 outline-1 outline-gray-200/90 px-8 py-2 text-lg rounded-lg"
              type="text"
              placeholder="Add a pick-up location"
            />
            <input
              value={desitnation}
              onChange={(e) => SetDesitnation(e.target.value)}
              onClick={() => SetPanelOpen(true)}
              className="w-full bg-[#eee] px-8 outline-1 mt-2 outline-gray-200/90 py-2 text-lg rounded-lg"
              type="text"
              placeholder="Enter your desitnation"
            />
          </form>
        </section>
        <section ref={panelRef} className="h-0 bg-white p-5">
          <LocationSearchPanel
            SetPanelOpen={SetPanelOpen}
            setVehiclePanel={setVehiclePanel}
          />
        </section>
      </div>

      {/* Vehicle Selection */}
      <div
        ref={vehiclePanelRef}
        className="fixed z-10 translate-y-full bottom-0 p-5 px-5 bg-white w-full"
      >
        <VehiclePanel
          setVehiclePanel={setVehiclePanel}
          setConfirmRidePanel={setConfirmRidePanel}
        />
      </div>

      {/* Confirm the Ride */}
      <div
        ref={confirmRidePanelRef}
        className="fixed z-10 translate-y-full bottom-0 p-5 px-5 bg-white w-full"
      >
        <ConfirmRide
          setConfirmRidePanel={setConfirmRidePanel}
          setLookingForDriver={setLookingForDriver}
        />
      </div>

      {/* Looking to accept Ride by Captain */}
      <div
        ref={lookingForDriverRef}
        className="fixed z-10 translate-y-full bottom-0 p-5 px-5 bg-white w-full"
      >
        <LookingForDriver setLookingForDriver={setLookingForDriver} />
      </div>

      {/* Waiting Driver Ride panel for the ride */}
      <div
        ref={waitingForDriverRef}
        className="translate-y-full fixed z-10 bottom-0 p-5 px-5 bg-white w-full"
      >
        <WaitingForDriver setWaitingForDriver={waitingForDriver} />
      </div>
    </div>
  );
};

export default Home;
