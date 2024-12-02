import React from 'react'

const ConfirmRide = (props) => {
  return (
    <div className=''>
        <i class="ri-arrow-down-wide-line block absolute top-0 opacity-55 left-1/2 -translate-x-1/2 text-center text-3xl" onClick={() => {
          props.setConfirmRidePanel(false)
        }}></i>
        <h3 className='text-2xl font-semibold my-5'>Confirm your Ride</h3>
        <div className='flex gap-2 flex-col items-center justify-between'>
            <img src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png" className='h-32' />
            <div className='w-full flex flex-col gap-4 my-2'>
                <div className='flex items-center gap-3 border-b-2 pb-1 border-gray-400/20'>
                    <i className="ri-map-pin-user-fill text-xl"></i>
                    <div>
                        <h3 className='font-medium text-lg'>562/11-A</h3>
                        <p className='text-gray-700'>Kankariya Lake, Ahmedabad</p>
                    </div>
                </div>
                <div className='flex items-center gap-3 border-b-2 pb-1 border-gray-400/20'>
                    <i className="ri-map-pin-2-fill text-xl"></i>
                    <div>
                        <h3 className='font-medium text-lg'>Third Wave Coffee</h3>
                        <p className='text-gray-700'>17th Cross Rd, 1st Sector, Navrangpura, Ahmedabad</p>
                    </div>
                </div>
                <div className='flex items-center gap-3 border-b-2 pb-1 border-gray-400/20'>
                <i className="ri-bank-card-line text-xl"></i>
                    <div>
                        <h3 className='font-medium text-lg'>₹193.00</h3>
                        <p className='text-gray-700'>Cash Cash</p>
                    </div>
                </div>
            </div>
            <button onClick={() => {
                props.setConfirmRidePanel(false);
                props.setLookingForDriver(true);
            }} className='w-full bg-green-600 text-white text-lg font-medium p-2 rounded-lg'>Confirm</button>
        </div>
    </div>
  )
}

export default ConfirmRide