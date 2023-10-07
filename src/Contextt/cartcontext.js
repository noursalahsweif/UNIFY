import axios from "axios";
import { useState } from "react";
import { createContext } from "react";

export let Cartcontext= createContext()
export default function Cartcontextprovider(props){
    let [cartcounter , setCartCounter] = useState(0)
    let [idcart , setidcart] = useState(null)
    let headers = {token:localStorage.getItem("user")}

    function Responsecart(id){
        
        return axios.post("https://ecommerce.routemisr.com/api/v1/cart" , {
            productId:id
    }
         , { headers}).then((resp)=>resp).catch((error)=>error)
    }
    
    function displaycart(){
        return axios.get(`https://ecommerce.routemisr.com/api/v1/cart`,{headers}).then((resp)=>resp).catch((error)=>error)
    }

    function deletecart(id){
        return axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}` , {headers}).then((resp)=>resp).catch((error)=>error)
    }

    function update(id , count){
        return axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}` , {
            count
        } ,
        {
            headers
        }).then((resp)=>resp).catch((error)=>error)
    }

    function clear(){
        return axios.delete(`https://ecommerce.routemisr.com/api/v1/cart`,{headers}).then((resp)=>resp).catch((error)=>error);
    }

    function payy(id , shippingAddress){
        return axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${id}?url=http://localhost:3000`,{shippingAddress},{headers}).then((resp)=>resp).catch((error)=>error)
        
    }

    return <Cartcontext.Provider value={{Responsecart, displaycart , deletecart ,update , cartcounter , setCartCounter , payy ,clear, idcart , setidcart}}>
        {props.children}
    </Cartcontext.Provider>
}