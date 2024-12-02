import React from 'react'

const WaitingForDriver = (props) => {
  return (
    <div className=''>
        <i class="ri-arrow-down-wide-line block absolute top-0 opacity-55 left-1/2 -translate-x-1/2 text-center text-3xl" onClick={() => {
          props.setWaitingForDriver(false)
        }}></i>
        <div className='flex items-center justify-between my-3'>
            <img className='h-20' src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png" />
            <div className='text-right'>
                <h2 className='text-lg font-medium'>Manav</h2>
                <h4 className='text-xl font-semibold'>GJ03AB1234</h4>
                <p className='tracking-tight text-base text-gray-700'>Maruti Suzuki Alto</p>
            </div>
        </div>
        
        <div className='flex gap-2 flex-col items-center justify-between my-2'>
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
        </div>
    </div>
  )
}

export default WaitingForDriver