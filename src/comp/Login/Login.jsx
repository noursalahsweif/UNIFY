import React, { useContext, useState } from 'react'

import axios from 'axios'
import { useFormik } from 'formik'
import { Link, useNavigate } from 'react-router-dom'

import * as yup from 'yup'
import { loginContext } from '../../Contextt/Logincontext'




export default function Login() {
  let [error , seterror] = useState('');
  let {setlogin} = useContext(loginContext);
   let navig = useNavigate();

    let data = {
        email:'',
        password:'',
    }

    let validation = yup.object({

        email:yup.string().required('please enter you email').email('please enter valid email'),
        password:yup.string().required('please enter a password').matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,'pass must be Minimum eight characters, at least one letter and one number' ),
    })


    async function submit(value){
        let data = await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signin', value).catch((error)=>{
            seterror(error.response.data.message);
            
        })
        console.log(data.data.message);
        if (data.data.message == 'success'){
            localStorage.setItem('user' , data.data.token);
            setlogin(localStorage.getItem('user'));
            navig('../home')
        }
    }
    let formik = useFormik({
        
        initialValues:data,
        validationSchema:validation,
        onSubmit:submit,
    })
  return <>
  <div className='container my-5'>
    <h2>Register now</h2>
    <form onSubmit={formik.handleSubmit}>


        <label htmlFor="email">Email :</label>
        <input type="email" className='form-control my-2' id='email'name='email' onChange={formik.handleChange} onBlur={formik.handleBlur} />
        {error? <div className='alert alert-danger'>{error}</div> :''}
        {formik.errors.email && formik.touched.email?<div className='alert alert-danger'>{formik.errors.email}</div>:''}

        <label htmlFor="password">Password :</label>
        <input type="password" className='form-control my-2' id='password'name='password'onChange={formik.handleChange} onBlur={formik.handleBlur} />
        {formik.errors.password && formik.touched.password?<div className='alert alert-danger'>{formik.errors.password}</div>:''}
        
        <div className='d-flex justify-content-between align-items-center'>
        <button type='submit' className='btn btn-danger mt-3' disabled={!(formik.isValid && formik.dirty)}> submit</button>
        <Link to='/frogetpass' className='text-decoration-none text-black'>forget my pass</Link>
        </div>

    </form>

  </div>
  </>
}
