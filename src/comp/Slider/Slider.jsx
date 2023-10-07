import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query';
import Slider from "react-slick";


export default function Slideer() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 1
      };

    function response(){
        return axios.get('https://ecommerce.routemisr.com/api/v1/categories');
    }
    let {data} = useQuery('categoris' , response )
  return <>
<Slider {...settings}> 
 {data?.data.data.map((data , index)=> <img key={index} src={data.image} height={200} alt="" /> )}

  </Slider>
  </>
}
