import { useFormik } from 'formik'
import React, { useContext } from 'react'
import { Cartcontext } from '../../Contextt/cartcontext';

export default function Pay() {
    let {payy , idcart} = useContext(Cartcontext);

    console.log(idcart);

    let formik = useFormik({
        initialValues:{
        details: "",
        phone: "",
        city: ""

        },
        onSubmit:(data)=>{
            paynow( idcart , data)
        }   
    })
    async function paynow(id , shippingAddress){
        let {data} = await payy(id , shippingAddress);
        if(data.status == "success"){
            window.location.href= data.session.url
        }
    }
  return <>
  <div  className="m-auto w-75">
    <form onSubmit={formik.handleSubmit}>

    <label htmlFor="details " className='mt-5'> details</label>
  <input onChange={formik.handleChange} className='form-control my-3' type="text" name='details' id='details'  />

  <label htmlFor="phone"> phone</label>
  <input onChange={formik.handleChange} className='form-control my-3' type="text" name='phone' id='phone'  />

  <label htmlFor="city"> city</label>
  <input onChange={formik.handleChange} className='form-control my-3' type="text" name='city' id='city'  />
  <button className='btn btn-success w-100 my-4'>pay</button>

    </form>
  </div>
  </>
}
