import axios from 'axios';
import React, { useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { CaptainDataContext } from '../../contexts/CaptainContext'

const CaptainProtectWrapper = ({children}) => {

    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    const { setCaptain } = useContext(CaptainDataContext);

    useEffect(() => {
        if(!token) {
            navigate('/captain-login');
        } 
    },[token])

    axios.get(`${import.meta.env.VITE_BASE_URL}/captains/profile`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then(response => {
        if(response.status == 201) {
            setCaptain(response.data.captain)
            navigate('/captain-home')
        }
    }).catch(err => {
        console.log(err);
        localStorage.removeItem('token');
        navigate('/captain-login')
    })
  return (
    <>
    {children}
    </>
  )
}

export default CaptainProtectWrapper