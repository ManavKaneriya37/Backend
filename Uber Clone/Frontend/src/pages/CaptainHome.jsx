import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import CaptainDetails from '../components/CaptainDetails'
import RidePopup from '../components/RidePopup'
import ConfirmRidePopup from '../components/ConfirmRidePopup'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
function CaptainHome() {

  const [ridePopUpPanel, setRidePopUpPanel] = useState(true);
  const ridePopUpPanelRef = useRef(null);

  const [confirmRidePopUpPanel, setConfirmRidePopUpPanel] = useState(false);
  const conformRidePopUpPanelRef = useRef(null);

    useGSAP(
        function () {
          if (ridePopUpPanel) {
            gsap.to(ridePopUpPanelRef.current, {
              transform: "translateY(0)",
            });
          } else {
            gsap.to(ridePopUpPanelRef.current, {
              transform: "translateY(100%)",
            });
          }
        },
        [ridePopUpPanel]
      );

      useGSAP(
        function () {
          if (confirmRidePopUpPanel) {
            gsap.to(conformRidePopUpPanelRef.current, {
              transform: "translateY(0)",
            });
          } else {
            gsap.to(conformRidePopUpPanelRef.current, {
              transform: "translateY(100%)",
            });
          }
        },
        [confirmRidePopUpPanel]
      );

  return (
    <div className='h-screen relative'>
        <div className='fixed top-0 p-3 flex items-center justify-between w-full'>
          <h1 className='text-3xl font-medium'>Uber</h1>
          <div className='h-10 w-10 bg-white/90 flex items-center justify-center rounded-full'>
            <Link to='/captain-home'><i className="ri-logout-box-r-line text-lg font-medium"></i></Link>
          </div>
        </div>

        <div className='h-3/5'>
        <img
            className="h-full w-full object-cover"
            src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
            alt="map"
        />
        </div>
        <div className='h-2/5 p-5'>
          <CaptainDetails />
        </div> 

        <div
        ref={ridePopUpPanelRef}
        className="fixed z-10 translate-y-full bottom-0 p-5 px-5 bg-white w-full"
        >
          <RidePopup setRidePopUpPanel={setRidePopUpPanel} setConfirmRidePopUpPanel={setConfirmRidePopUpPanel}/>
        </div>

        <div
        ref={conformRidePopUpPanelRef}
        className="fixed z-10 translate-y-full h-screen bottom-0 p-5 px-5 bg-white w-full"
        >
          <ConfirmRidePopup setConfirmRidePopUpPanel={setConfirmRidePopUpPanel}/>
        </div>
    </div>
  )
}

export default CaptainHome