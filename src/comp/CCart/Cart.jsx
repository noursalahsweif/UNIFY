import React, { useContext, useEffect, useState } from 'react'
import { Cartcontext } from '../../Contextt/cartcontext'
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';

export default function Cart() {

  let {displaycart , deletecart , update , setCartCounter ,setidcart , clear} = useContext(Cartcontext);
  let [displaydata , setdisplaydata ] = useState(null);
  async function response(){
    let {data} = await displaycart();
    setdisplaydata(data);
    setidcart(data.data._id)
    setCartCounter(data?.numOfCartItems)
  }

  async function deleteCart(){
    let {data} = await clear();
    console.log(data);
    setdisplaydata(data)
  }

  async function deleteprod(id){
    let {resp} = await deletecart(id);
    setdisplaydata(resp);
    setCartCounter(resp?.numOfCartItems)
  }

  async function updateco(id , count){
    let {data} = await update(id , count);
    console.log(data);
    setdisplaydata(data);
  }


useEffect(()=>{
  response()
})
return <>

  <div className="container bg-light">
    <div className="head d-flex justify-content-between align-items-center mt-5 p-4">
      <h2>Cart shop</h2>
      <Link className='btn btn-success' to='/pay'>  check out</Link>
    </div>

    <div className="head d-flex justify-content-between align-items-center p-2">
      <h6>total number of items : {displaydata?.numOfCartItems} </h6>
      <h6>total price: { displaydata?.data.totalCartPrice} L.E</h6>
    </div>
    <div className="row mt-4 g-4">
      {displaydata?.data.products.map((val,index)=>{
        
        return <>
        <div key={index} className="col-md-3">
        <img src={val.product.imageCover} className='w-100' alt="" />
      </div>
      <div className="col-md-9">
            <div className='d-flex justify-content-between align-items-center h-100'>
              <div className="info">
                <h5>name : {val.product.title}</h5>
                <h6 className='my-3'>price : {val.price} L.E</h6>
                
                <span className='text-danger cursor' onClick={()=>{deleteprod(val.product._id)}} > remove<i class="fa-solid fa-trash"></i> </span>
              </div>
              <div className="riseup d-flex">
                <button onClick={()=>{updateco(val.product._id, val.count +1)}} className='btn btn-success'>+</button>
                <h5  className='h6 mx-3'>{val.count}</h5>
                <button onClick={()=>{updateco(val.product._id, val.count -1)}} className='btn btn-success'>-</button>
 
              </div>
            </div>
      </div>
        </>
      })}
      <button onClick={deleteCart} className='w-100 btn btn-danger'>clear ur cart</button>
    </div>
  </div>
  </>
}
