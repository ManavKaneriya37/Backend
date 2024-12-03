import React from 'react'
import { Link } from 'react-router-dom'

const Riding = () => {
  return (
    <div className='h-screen relative'>
        <div className='fixed h-10 w-10 bg-white/90 flex items-center justify-center rounded-full right-2 top-2'>
            <Link to='/home'><i className="ri-home-4-line text-lg font-medium"></i></Link>
        </div>
        <div className='h-1/2'>
        <img
            className="h-full w-full object-cover"
            src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
            alt="map"
        />
        </div>
        <div className='h-1/2 p-3'>
            <div className='flex items-center justify-between'>
                <img className='h-20' src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png" />
                <div className='text-right'>
                    <h2 className='text-base font-medium'>Manav</h2>
                    <h4 className='text-lg font-semibold'>GJ03AB1234</h4>
                    <p className='tracking-tight text-sm text-gray-700'>Maruti Suzuki Alto</p>
                </div>
            </div>

            <div className='flex gap-2 flex-col items-center justify-between my-2'>
                <div className='w-full flex flex-col gap-4 my-2'>
                    <div className='flex items-center gap-3 border-b-2 pb-1 border-gray-400/20'>
                        <i className="ri-map-pin-2-fill text-xl"></i>
                        <div>
                            <h3 className='font-medium text-base'>Third Wave Coffee</h3>
                            <p className='text-gray-700 text-sm'>17th Cross Rd, 1st Sector, Navrangpura, Ahmedabad</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-3 border-b-2 pb-1 border-gray-400/20'>
                    <i className="ri-bank-card-line text-xl"></i>
                        <div>
                            <h3 className='font-medium text-base'>₹193.00</h3>
                            <p className='text-gray-700 text-sm'>Cash Cash</p>
                        </div>
                    </div>
                </div>
            </div>
            <button className='w-full bg-green-600 text-white text-lg font-medium p-2 rounded-lg'>Make a payment</button>
        </div>
    </div>
  )
}

export default Riding