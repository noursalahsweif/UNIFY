import React, { useContext, useState } from 'react'
import axios from 'axios'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'

import * as yup from 'yup'

export default function Forgetpass() {
    let navig = useNavigate();
    let data = {
        email:''
    }

    let validation = yup.object({

        email:yup.string().required('please enter you email').email('please enter valid email'),
    })


    async function submit(value){
        let data = await axios.post('https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords', value).catch((error)=>{
            console.log(error);
        })
        console.log(data);
        if (data.data.statusMsg == 'success'){
            navig('../verresetcode')
        }
    }
    let formik = useFormik({
        
        initialValues:data,
        validationSchema:validation,
        onSubmit:submit,
    })

   
  return <>
  <div className="w-75 m-auto mt-5">
    <form onSubmit={formik.handleSubmit}>

    <label htmlFor="email" className='fs-4 fw-bold my-3'> enter ur email </label>
    <input className='form-control' onChange={formik.handleChange} type="email"  id='email' onBlur={formik.handleBlur} name='email'/>
    <button className='btn btn-danger my-4'> verify </button>
    </form>




  </div>
  </>
}

