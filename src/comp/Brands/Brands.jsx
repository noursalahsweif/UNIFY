import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'


export default function Brands() {
    function response(){
        return axios.get('https://ecommerce.routemisr.com/api/v1/brands')
    }
    let {data} = useQuery('brands' , response )
    console.log(data?.data.data);
  
  return <>
  <div className="container">
    <div className="row g-4">
        {data?.data.data.map((val)=> <>
        <div className="col-md-3 text-center hover-cat border">
        <img src={val.image} className='w-100 h-75' alt="" />
        <h3>{val.name}</h3>
        </div>
        </> )}
    </div>
  </div>
  
  </>
 
   
    
      {/* https://ecommerce.routemisr.com/api/v1/brands */}
  
}
