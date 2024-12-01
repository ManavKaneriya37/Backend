import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { UserDataContext } from '../../contexts/userContext';
import axios from 'axios';

const UserLogin = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')

  const {user, setUser} = useContext(UserDataContext);
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();

    const userData = {
      email: email,
      password: password
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData);
    if (response.status === 200) {
      const data = response.data;
      setUser(data.user);
      localStorage.setItem('token', data.token);
      navigate('/home');
    }
    
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

          <input type ="submit" value="Login" 
          className='block bg-black text-white rounded w-full mt-8 py-2 text-center text-xl font-medium' 
          />

          <p className='text-center mt-4 text-[16px]'>New here? <Link to='/signup' className='text-blue-500'>Create new Account</Link></p>
        </form>
      </div>

      <Link to='/captain-login' className='block text-center w-full text-xl bg-emerald-600 py-2 text-white rounded my-2'>Sign in as Captain</Link>
    </div>
  )
}

export default UserLogin