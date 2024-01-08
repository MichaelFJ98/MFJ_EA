import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom';
import Layout from './Layout.js';
import Home from './components/Home/Home.js';
import Category from './components/Category/Category.js';
import Login from './components/Login/Login.js'
import Register from './components/Login/Register.js'
import Shoppingcart from './components/Shoppingcart/Shoppingcart.js';
import Order from './components/Order/Order.js';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='register' element={<Register/>}/>
      <Route path='shoppingcart' element={<Shoppingcart/>}/>
      <Route path='order' element={<Order/>}/>
      <Route path='category/:cat_id' element={<Category/>}/>
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
