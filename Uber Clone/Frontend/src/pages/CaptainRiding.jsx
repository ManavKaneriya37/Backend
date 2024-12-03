import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import FinishRide from '../components/FinishRide';

const CaptainRiding = () => {

  const [finishRidePanel, setFinishRidePanel] = useState(false);
  const finishRidePanelRef = useRef(null);

  useGSAP(
    function () {
      if (finishRidePanel) {
        gsap.to(finishRidePanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(finishRidePanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [finishRidePanel]
  );

  return (
    <div className='h-screen relative'>
        <div className='fixed top-0 p-3 flex items-center justify-between w-full'>
          <h1 className='text-3xl font-medium'>Uber</h1>
          <div className='h-10 w-10 bg-white/90 flex items-center justify-center rounded-full'>
            <Link to='/captain-home'><i className="ri-logout-box-r-line text-lg font-medium"></i></Link>
          </div>
        </div>

        <div className='h-4/5'>
          <img
              className="h-full w-full object-cover"
              src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
              alt="map"
          />
        </div>

        <div 
        onClick={() => setFinishRidePanel(true)}
        className='h-1/5 bg-neutral-400/20 shadow-inner px-5 shadow-black/20 border-t-4 border-black/50'>
          <i className="ri-arrow-up-wide-line block text-center text-3xl"></i>
          <div className='flex items-center mt-2 justify-between'>
            <h3 className='text-xl font-semibold w-full'>4 KM Away</h3>
            <button className='text-center block w-full my-3 bg-green-600 text-white text-lg font-medium p-2 rounded-lg'>Complete Ride</button>
          </div>
        </div>

        <div
        ref={finishRidePanelRef}
        className="fixed z-10 translate-y-full h-screen bottom-0 p-5 px-5 bg-white w-full"
        >
          <FinishRide setFinishRidePanel={setFinishRidePanel}/>
        </div>
    </div>
  )
}

export default CaptainRiding