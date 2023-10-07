import axios from 'axios'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import * as yup from 'yup'

export default function Register() {
 let [error , seterror] = useState('');

   let navig = useNavigate();

    let data = {
        name:'',
        email:'',
        password:'',
        rePassword:'',
        phone:''
    }

    let validation = yup.object({

        name:yup.string().required('please enter you name').min(3 , 'min 3 letters'),
        email:yup.string().required('please enter you email').email('please enter valid email'),
        password:yup.string().required('please enter a password').matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,'pass must be Minimum eight characters, at least one letter and one number' ),
        rePassword:yup.string().required('please enter a password').oneOf([yup.ref('password')] ,'password do not match'),
        phone:yup.string().required('please enter your phone').matches(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,'please enter a valid phone')
    })

    async function submit(value){
        let data = await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signup', value).catch((error)=>{
            seterror(error.response.data.message);
            
        })
        console.log(data.data.message);
        if (data.data.message == 'success'){


            navig('/login')
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

        <label htmlFor="name">Name :</label>
        <input type="text" className='form-control my-2' id='name' name='name' onChange={formik.handleChange} onBlur={formik.handleBlur}/>
        {formik.errors.name && formik.touched.name?<div className='alert alert-danger'>{formik.errors.name}</div>:''}

        <label htmlFor="email">Email :</label>
        <input type="email" className='form-control my-2' id='email'name='email' onChange={formik.handleChange} onBlur={formik.handleBlur} />
        {error? <div className='alert alert-danger'>{error}</div> :''}
        {formik.errors.email && formik.touched.email?<div className='alert alert-danger'>{formik.errors.email}</div>:''}

        <label htmlFor="password">Password :</label>
        <input type="password" className='form-control my-2' id='password'name='password'onChange={formik.handleChange} onBlur={formik.handleBlur} />
        {formik.errors.password && formik.touched.password?<div className='alert alert-danger'>{formik.errors.password}</div>:''}

        <label htmlFor="repass">Re password :</label>
        <input type="password" className='form-control my-2' id='repass'name='rePassword' onChange={formik.handleChange} onBlur={formik.handleBlur} />
        {formik.errors.rePassword && formik.touched.rePassword?<div className='alert alert-danger'>{formik.errors.rePassword}</div>:''}

        <label htmlFor="phone">Phone :</label>
        <input type="tel" className='form-control my-2' id='phone'name='phone'onChange={formik.handleChange} onBlur={formik.handleBlur} />
        {formik.errors.phone && formik.touched.phone?<div className='alert alert-danger'>{formik.errors.phone}</div>:''}

        <button type='submit' className='btn btn-danger mt-3 m-auto' disabled={!(formik.isValid && formik.dirty)}> submit</button>
    </form>

  </div>
  </>
}
