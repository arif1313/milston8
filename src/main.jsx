import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Contact from './Component/Contact/Contact.jsx';
import About from './Component/About/About.jsx';
import Home from './Component/Home/Home.jsx';
import Users from './Component/Users/Users.jsx';
import Userdetail from './Component/Userdetails/Userdetail.jsx';
import Erorr from './Component/Error/Erorr.jsx';
import From from './Component/From/From.jsx';
import FormOnchange from './Component/FormOnchange/FormOnchange.jsx';
import RefForm from './Component/RefForm/RefForm.jsx';
import Hookform from './Component/Hook/Hookform.jsx';
import Hookform2 from './Component/Hook/Hookform2.jsx';
import Reuse from './Component/FromReuse/Reuse.jsx';

const router = createBrowserRouter([
  
  {
    path: "/",
    element: <Home></Home> ,
    errorElement: <Erorr></Erorr>,
  children: [
   
   {
    path: "/contact",
    element: <Contact></Contact>
   },
   {
    path: "/about",
    element: <About></About>
   },
   {
    path: "/users",
     loader:()=>fetch('https://jsonplaceholder.typicode.com/users'),
    element: <Users></Users>
   },
   {
    path: "/from",
    
    element: <From></From>
   },
   {
    path: "/from2",
    
    element: <FormOnchange></FormOnchange>
   },
  {
    path: "/refform",
    element: <RefForm></RefForm>
  },
   {
    path: "/user/:userId",
    loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
    element: <Userdetail></Userdetail>
   },
   {
    path: "/hokform",
    element: <Hookform></Hookform>
   },
   {
    path: "/hokform2",
    element: <Hookform2></Hookform2>
   },
   {
    path: "/reuseform",
    element: <Reuse></Reuse>
   }
  ]
}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
