import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const UserLogin = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [userData, setUserData] = useState({})

  const handleSubmit = e => {
    e.preventDefault();

    setUserData({
      email: email,
      password: password
    })
    
    setEmail('');
    setPassword('')
  } 

  return (
    <div className='h-screen w-full flex flex-col justify-between p-2'>
      <div>
      <h1 className='text-[32px] font-medium tracking-tight p-5'>Uber</h1>
     
        <form onSubmit={(e) => {
          handleSubmit(e);
        }} className='px-4'>

          <h3 className='text-xl font-bold my-2'>What's your email</h3>
          <input 
          type="emil"
          placeholder='Login email'
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          required
          className="bg-[#eeeeee] placeholder:text-base placeholder:font-thin border px-2 outline-1 outline-neutral-300 py-2 text-lg font-medium rounded w-full"
          />

          <h3 className='text-xl font-bold mt-5 mb-2'>Enter Password</h3>
          <input 
          type="password"
          placeholder='password'
          required
          value={password}
          onChange={(e) => {
            setPassword(e.target.value)
          }}
          className="bg-[#eeeeee] placeholder:text-base placeholder:font-thin border px-2 outline-1 outline-neutral-300 py-2 text-lg font-medium rounded w-full"
          />

          <button to=""
          className='block bg-black text-white rounded w-full mt-8 py-2 text-center text-xl font-medium' 
          >Login</button>

          <p className='text-center mt-4 text-[16px]'>New here? <Link to='/signup' className='text-blue-500'>Create new Account</Link></p>
        </form>
      </div>

      <Link to='/captain-login' className='block text-center w-full text-xl bg-emerald-600 py-2 text-white rounded my-2'>Sign in as Captain</Link>
    </div>
  )
}

export default UserLogin