import logo from './logo.svg';
import './App.css';
import Layout from './comp/Layoutt/Layout';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './comp/Home/Home';
import Register from './comp/Register/Register';
import Wishlist from './comp/Wishlist/Wishlist';
import Login from './comp/Login/Login';
import Cart from './comp/CCart/Cart';
import Products from './comp/product/Products';
import Logincontextprovider, { loginContext } from  './Contextt/Logincontext';
import Protection from './comp/protection/Protection';
import { QueryClient, QueryClientProvider } from 'react-query';
import Details from './comp/Details/Details';
import Catrgory from './comp/category/Catrgory';
import Cartcontextprovider from './Contextt/cartcontext';
import toast, { Toaster } from 'react-hot-toast';
import Pay from './comp/pay/Pay';
import wishContextprovider from './Contextt/wishcontext';
import Brands from './comp/Brands/Brands';
import Forgetpass from './comp/forgetpass/Forgetpass';
import Resetpass from './comp/resetpass/Resetpass';
import Verreseetcode from './comp/verifyresetcode/Verresetcode';






function App() {
  let query = new QueryClient();
  

  let routes =createBrowserRouter([

    {path:'' , element:<Layout/> , children:[

      {path:'home' , element:<Protection><Home/></Protection> },
      {path:'Category' , element:<Protection><Catrgory/></Protection> },
      {path:'pay' , element:<Protection><Pay/></Protection> },
      {path:'' , element:<Register/>},
      {path:'/details/:id' , element:<Details/>},
      {path:'wishlist' , element:<Protection><Wishlist/></Protection>},
      {path:'frogetpass' , element:<Forgetpass/>},
      {path:'login' , element:<Login/>},
      {path:'resetpass' , element:<Resetpass/>},
      {path:'verresetcode' , element:<Verreseetcode/>},
      {path:'register' , element:<Register/>},
      {path:'cart' , element:<Protection><Cart/></Protection>},
      {path:'allorders' , element:<Protection><Home/></Protection>},
      {path:'brands' , element:<Protection><Brands/></Protection>},
      {path:'products' , element:<Protection><Products/></Protection>}
    ]}
  ])
  
  return <>
        <Toaster />
        <wishContextprovider>
        <Cartcontextprovider>
  <QueryClientProvider client={query}>
  <Logincontextprovider>
  <RouterProvider router={routes}></RouterProvider>


  </Logincontextprovider>
  </QueryClientProvider>
  </Cartcontextprovider> 
        </wishContextprovider>



 
  
  



  





  
  </>
}

export default App;
