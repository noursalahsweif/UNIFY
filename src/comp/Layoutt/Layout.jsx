import React, { useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'
import { useContext } from 'react'
import { loginContext } from '../../Contextt/Logincontext'


export default function Layout() {
  let {setlogin} = useContext(loginContext);
  useEffect(()=>{
    if(localStorage.getItem('user')!=null)
    {
      setlogin(localStorage.getItem('user'))
    }
  } , [])
  return <>
  <Navbar/>
  <Outlet/>
    <Footer/>
  </>
}
