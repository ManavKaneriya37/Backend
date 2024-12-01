import React,{useState, useContext} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { CaptainDataContext } from '../../contexts/CaptainContext';
import axios from 'axios';
const CaptainLogin = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')

  const {captain, setCaptain} = useContext(CaptainDataContext);
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();

    const captainData = {
      email: email,
      password: password
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, captainData);
    
    if(response.status === 200){
      const data = response.data;
      console.log(data.token);
      
      localStorage.setItem('token', data.token);
      setCaptain(data.captain);
      navigate('/captain-home');
    }
    
    setEmail('');
    setPassword('')
  } 

  return (
    <div className='h-screen w-full flex flex-col justify-between p-2'>
      <div>
      <h1 className='text-[32px] font-medium tracking-tight p-5'>Uber<i class='ri-arrow-right-line'></i></h1>
     
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
          className='block bg-emerald-500 text-white rounded w-full mt-8 py-2 text-center text-xl font-medium' 
          >Login</button>

          <p className='text-center mt-4 text-[16px]'>New fleet? <Link to='/captain-signup' className='text-blue-500'>Create new Account</Link></p>
        </form>
      </div>

      <Link to='/login' className='block text-center w-full text-xl bg-zinc-800 py-2 text-white rounded my-2'>Sign in as User</Link>
    </div>
  )
}

export default CaptainLogin