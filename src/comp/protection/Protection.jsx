import React from 'react'
import { Navigate } from 'react-router-dom'

export default function Protection(prop) {
  if (localStorage.getItem('user')!=null)
  {
    return prop.children
  }
  else{
    return <Navigate to='/login'/>
  }
}
