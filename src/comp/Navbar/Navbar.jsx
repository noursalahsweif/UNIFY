import React, { useContext } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { loginContext } from '../../Contextt/Logincontext'
import style from './Navbar.module.css'
import { Cartcontext } from '../../Contextt/cartcontext';

export default function Navbar() {
  let {login , setlogin} = useContext(loginContext);
  let {cartcounter}= useContext(Cartcontext)
  let navig = useNavigate();
  function logout(){
    
    localStorage.removeItem('user');
    setlogin(null)
    navig('/login')
  }

  return <>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container">
    <Link class="navbar-brand fs-3" to='home'>UNIFY</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
    
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        {login !=null? <>
        <li class="nav-item">
          <Link class="nav-link" to='home'>Home </Link>
        </li>
        <li class="nav-item position-relative mx-3">
          <Link class="nav-link " to='cart'>Cart 
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {cartcounter}
  </span>
           </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to='wishlist'>Wish list</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to='products' >Products</Link>
        </li>

        <li class="nav-item">
          <Link class="nav-link" to='Category' >Category</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to='brands'>Brands</Link>
        </li>

        <li class="nav-item">
          <h3 class={style.cursor +" nav-link" } onClick={logout}>logout</h3>
        </li>

        
        </>
        :
        <>
        <li class="nav-item ms-auto">
          <Link class="nav-link " to='login'>login</Link>
        </li><li class="nav-item ms-auto">
          <Link class="nav-link" to='register'>Register</Link>
        </li>
        <li class="nav-item d-none">
          <Link class="nav-link" to='../resetpass'>Wish list</Link>
          <Link class="nav-link" to='../verresetcode'>Wish list</Link>
        </li>
        </>
        
        }
        
        
        
      </ul>
    </div>
  </div>
</nav>
  </>
}
