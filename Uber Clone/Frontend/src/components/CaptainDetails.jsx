import React from 'react'

const CaptainDetails = () => {
  return (
    <div>
         <div className='flex items-center justify-between'>
            <div className='flex items-center justify-start gap-3'>
              <img className='h-10 w-10 object-cover rounded-full' src="https://plus.unsplash.com/premium_photo-1664478383014-e8bc930be7c2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
              <h4 className='text-lg font-medium'>John Doe</h4>
            </div>
            <div className='text-right'>
              <h5 className='text-xl font-semibold'>₹295.20</h5>
              <p className='text-sm font-base text-gray-600'>Earned</p>
            </div>
          </div>
          <div className='flex justify-between p-4 mt-4 bg-gray-200/40 rounded-xl'>
            <div className='text-center'>
              <i className="text-3xl block mb-1 font-thin ri-time-line"></i>
              <h5 className='text-lg'>10.2</h5>
              <p className='text-sm text-gray-600'>Hours Online</p>
            </div>
            <div className='text-center'>
              <i className="text-3xl block mb-1 font-thin ri-speed-up-line"></i>
              <h5 className='text-lg'>30KM</h5>
              <p className='text-sm text-gray-600'>Total Distance</p>
            </div>
            <div className='text-center'>
              <i className="text-3xl block mb-1 font-thin ri-book-line"></i>
              <h5 className='text-lg'>20</h5>
              <p className='text-sm text-gray-600'>Total Jobs</p>
            </div>
          </div>
    </div>
  )
}

export default CaptainDetails