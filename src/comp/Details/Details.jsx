import axios, { Axios } from 'axios'
import React, { useContext } from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import Slider from "react-slick";
import { Cartcontext } from '../../Contextt/cartcontext';
import toast from 'react-hot-toast';


export default function Details() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      let {Responsecart , setCartCounter}= useContext(Cartcontext);

  async function addtocart(id){
    let resp = await Responsecart(id);
    if(resp.data.status== 'success'){
      toast.success(resp.data.message)
      setCartCounter(resp.data.numOfCartItems)
    }
    else{
      toast.error(resp.data.message)
    }
  }

    let {id} = useParams();


    function response(id){
       return axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
    }

let {data}= useQuery('detailsinfo' , ()=>response(id));
  return <>

  <div className="container">
    <div className="row mt-5">
    <div className="col-md-4">
    <Slider {...settings}>
      {data?.data.data.images.map((img , index)=>{return <img key={index} src={img} className='w-100' alt="" /> })}
    </Slider>
    </div>
        <div className="col-md-8 d-flex justify-content-center align-items-center">
            <div className="">
            <h5>{data?.data.data.title}</h5>
            <p>{data?.data.data.description}</p>
            <div className="info d-flex justify-content-between align-items-center">
                <h6>{data?.data.data.price} L.E</h6>
                <h6  className='fas fa-star text-warning mt-3 me-5'>{data?.data.data.ratingsAverage}</h6 >

            </div>
            <button className='btn btn-success w-100' onClick={()=>{addtocart(data?.data.data.id)}}>add to cart</button>
            </div>
        </div>
    </div>
  </div>
  
  </>
}
