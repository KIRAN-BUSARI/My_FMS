import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './components/Home/Home'
import About from './components/About/About'
import Layout from './components/Layout/Layout'
import Contact from './components/Contact/Contact'
import './index.css'
import {  Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import PageNotFound from './components/PageNotFound'
import Login from './components/Login'
import Signup from './components/Signup'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route path='' element={ <Home/>} />
    <Route path='about' element={<About />} />
    <Route path='contact' element={<Contact />} />
    <Route path='login' element={<Login/>}/>
    <Route path='signup' element={<Signup/>}/>


    <Route path='*' element={ <PageNotFound />} />
  </Route>
))


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='' element={ <Home/>} />
          <Route path='about' element={ <About/>} />
        </Route>
      </Routes>
    </BrowserRouter> */}
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
