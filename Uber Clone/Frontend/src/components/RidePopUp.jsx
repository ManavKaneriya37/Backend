import React from 'react'

const RidePopup = (props) => {

  return (
    <div>
        <div>
            <i className="ri-arrow-down-wide-line block absolute top-0 opacity-55 left-1/2 -translate-x-1/2 text-center text-3xl" onClick={() => {
              props.setRidePopUpPanel(false)
            }}></i>
            <h3 className='text-2xl font-semibold my-5'>New Ride available!</h3>
            <div className='border-amber-200 border-2 rounded-xl p-2 py-3 flex items-center justify-between'>
                <div className='flex items-center gap-4'>
                    <img className='w-14 h-14 rounded-full object-cover' src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D" alt="UserImage" />
                    <h2 className='text-xl font-medium'>Jone Doe</h2>
                </div>
            </div>
            <div className='flex gap-2 flex-col items-center justify-between'>
                <div className='flex items-center flex-col my-7 gap-4'>
                    <div className='flex w-full items-center gap-3 pb-2 border-b-2  border-gray-400/20'>
                        <i className="ri-map-pin-user-fill text-xl"></i>
                        <div>
                            <h3 className='font-medium text-lg'>562/11-A</h3>
                            <p className='text-gray-700'>Kankariya Lake, Ahmedabad</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-3 border-b-2 pb-2 border-gray-400/20'>
                        <i className="ri-map-pin-2-fill text-xl"></i>
                        <div>
                            <h3 className='font-medium text-lg'>Third Wave Coffee</h3>
                            <p className='text-gray-700'>17th Cross Rd, 1st Sector, Navrangpura, Ahmedabad</p>
                        </div>
                    </div>
                </div>
                <button onClick={() => {
                    props.setConfirmRidePopUpPanel(true);
                    props.setRidePopUpPanel(false);
                }} className='w-full bg-green-600 text-white text-lg font-medium p-2 rounded-lg'>Accept</button>
                <button onClick={() => {
                    props.setRidePopUpPanel(false)
                }} className='w-full bg-gray-200 text-gray-700 text-lg font-medium p-2 rounded-lg'>Ignore</button>
            </div>
        </div>
    </div>
  )
}

export default RidePopup