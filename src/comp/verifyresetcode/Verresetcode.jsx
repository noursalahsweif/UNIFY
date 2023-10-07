
import React, { useContext, useState } from 'react'
import axios from 'axios'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'

import * as yup from 'yup'

export default function Verreseetcode() {
    let navig = useNavigate();
    let data = {
        resetCode:''
    }

    let validation = yup.object({

        email:yup.string().required('please enter you email').email('please enter valid email'),
    })


    async function submit(value){
        let data = await axios.post('https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode', value).catch((error)=>{
            console.log(error);
        })
        console.log(data);
        if (data?.data.status == 'Success'){
            navig('../resetpass')
        }
    }
    let formik = useFormik({
        
        initialValues:data,
        // validationSchema:validation,
        onSubmit:submit,
    })

   
  return <>
  <div className="w-75 m-auto mt-5">
    <form onSubmit={formik.handleSubmit}>

    <label htmlFor="resetCode" className='fs-4 fw-bold my-3'> enter ur resetCode </label>
    <input className='form-control' onChange={formik.handleChange} type="resetCode"  id='resetCode' onBlur={formik.handleBlur} name='resetCode'/>
    <button className='btn btn-danger my-4'> verify </button>
    </form>




  </div>
  </>
}

