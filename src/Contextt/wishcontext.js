import axios from "axios";
import { createContext, useState } from "react";

export let Wishcontext = createContext()

export default function wishContextprovider(props){
    let headers = {token:localStorage.getItem("user")}


    function respwish(iddd){
        return axios.post(`https://ecommerce.routemisr.com/api/v1/wishlist`,{productId:iddd},{headers})
    }
    return <Wishcontext.Provider value={{respwish}}>
        {props.children}

    </Wishcontext.Provider>
}