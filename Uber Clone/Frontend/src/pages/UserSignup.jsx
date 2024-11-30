import React, {useState} from 'react'
import { Link } from 'react-router-dom';

const UserSignup = () => {

  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [userData, setUserData] = useState({})

  const handleSubmit = e => {
    e.preventDefault();

    setUserData({
      fullname:{
        firstname:firstname,
        lastname:lastname
      },
      email: email,
      password: password
    })

    setFirstname('')
    setLastname('');
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

          <h3 className='text-xl font-bold mt-5 mb-2'>What's your name</h3>
          <div className='flex items-center gap-2 mb-3'>
            <input 
            type="text" 
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            className="bg-[#eeeeee] placeholder:text-base placeholder:font-thin border px-2 outline-1 outline-neutral-300 py-2 text-lg font-medium rounded w-full" placeholder='Firstname'
            />
            <input 
            type="text" 
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            className="bg-[#eeeeee] placeholder:text-base placeholder:font-thin border px-2 outline-1 outline-neutral-300 py-2 text-lg font-medium rounded w-full" 
            placeholder='Lastname'/>
          </div>

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
          >Sign up</button>

          <p className='text-center mt-4 text-[16px]'>Already have an Account? <Link to='/login' className='text-blue-500'>Login</Link></p>
        </form>
      </div>

        <p className='text-center my-1 text-[11px]'>By signing up, you agree to Uber's <Link to='' className='text-blue-500'>Terms of Service</Link> and <Link to='' className='text-blue-500'>Conditions of Use</Link> and <Link to='' className='text-blue-500'>Privacy Policy</Link></p>
    </div>
  )
}

export default UserSignup