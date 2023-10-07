
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useQuery } from 'react-query';
import {Circles} from 'react-loader-spinner'
import { Link } from 'react-router-dom';
import Slider from '../Slider/Slider';
import Main from '../main/Main';
import { Cartcontext } from '../../Contextt/cartcontext';
import toast from 'react-hot-toast';
import { Wishcontext } from '../../Contextt/wishcontext';


export default function Home() {
  function response(){
    return axios.get('https://ecommerce.routemisr.com/api/v1/products');
  }
  

  let {data , isLoading } = useQuery('mainProducts' , response)
  let {Responsecart , setCartCounter}= useContext(Cartcontext);
  
  

  // async function addToWishList(iddd){
  //   let resp = await responssse(iddd);
  //   console.log(resp);
  //   // if(resp.data.status== 'success'){
  //   //   toast.success(resp.data.message)
  //   //   setCartCounter(resp.data.numOfCartItems)
  //   // }
  //   // else{
  //   //   toast.error(resp.data.message)
  //   // }
  // }


  async function addtocart(id){
    let resp = await Responsecart(id);
    if(resp?.data.status== 'success'){
      toast.success(resp?.data.message)
      setCartCounter(resp?.data.numOfCartItems)
    }
    else{
      toast.error(resp.data.message)
    }
  }


  return <>
  {isLoading? <div className="spinner w-100 vh-100 bg-black d-flex justify-content-center align-items-center">
    
  <Circles
  height="80"
  width="80"
  color="#4fa94d"
  ariaLabel="circles-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/>
  </div>:
  <div className="container">
    <Main/>
    <br />
    <br />
    <Slider/>
    <br /><br /><br />
  <div className="row g-4">

    {data?.data.data.map((info , index)=>
    <div key={index} className="col-md-3 info">
    <Link to={`/details/${info.id}`} className='text-decoration-none text-black'>
    <div className=" p-3  ">
      <img src={info.imageCover} className='w-100' alt="" />
      <h6 className='mt-3 ms-4 text-danger' >{info.category.name}</h6>
      <h6 className='mt-3 ms-4'  >{info.title.split(" ").slice(0 , 2).join(" ")}</h6 >

      <div className="foot d-flex justify-content-between">
        <h6 className='mt-3 ms-5 '  >{info.price} L.E</h6 >
        <h6  className='fas fa-star text-warning mt-3 me-5'>{info.ratingsAverage}</h6 >
      </div>
    </div>
    </Link>
    <button className='btn btn-success m-2 w-50 cart' onClick={()=>{addtocart(info.id)}}>add to cart</button>
    {/* <i onClick={()=>{addToWishList('652172c372c2af6c445d4524')}} class="fa-solid fa-heart fs-3 ms-5"></i> */}

  </div>
    )}
  </div>
</div>
  
  }
  
  
  
  </>
}
