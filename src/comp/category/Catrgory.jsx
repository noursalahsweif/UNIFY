import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'


export default function Catrgory() {
    function response(){
        return axios.get('https://ecommerce.routemisr.com/api/v1/categories')
    }
    let {data} = useQuery('categoris' , response )
  return <>
  <div className="container">
    <div className="row mt-5">
        {data?.data.data.map((val)=> <>
        <div className="col-md-4 text-center hover-cat">
        <img src={val.image} className='w-100 h-75' alt="" />
        <h3>{val.name}</h3>
        </div>
        </> )}
    </div>
  </div>
  
  </>
}
