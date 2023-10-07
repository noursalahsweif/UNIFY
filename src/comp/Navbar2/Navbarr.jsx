import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Countercontext } from '../../Contextt/CounterConext'

export default function Navbar() {
  let {count} = useContext(Countercontext)
  console.log('====================================');
  console.log(count);
  console.log('====================================');
  return <>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container">
    <Link class="navbar-brand fs-3" to='home'>UNIFY</Link>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link" to='home'>Register </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to='cart'>Login</Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
  </>
}
