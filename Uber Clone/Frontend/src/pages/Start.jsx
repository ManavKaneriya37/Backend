import React from 'react'
import {Link} from 'react-router-dom'

const Start = () => {
  return (
    <div>
      <div 
        className='h-screen w-full bg-[url(https://mir-s3-cdn-cf.behance.net/project_modules/disp/c5310f182519763.652f3606b64b0.jpg)] bg-cover bg-center flex flex-col justify-between'
        >
        <h1 className='text-4xl font-bold p-5'>Uber</h1>
        <div 
        className='bg-white py-5 px-3'
        >
          <h1 className='text-3xl font-bold pb-6'>Get Started with Uber</h1>
          <Link 
          to='/login' 
          className='block text-center text-xl w-full text-white bg-black rounded-lg py-3'
          >Continue  <i className="ri-arrow-right-line"></i>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Start