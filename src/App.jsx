import { useState } from 'react'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import Landing from './Pages/Landing/Landing'
import Home from './Pages/Home/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import View from './Components/View/View'



function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/view/:id' element={<View/>}/>
    </Routes>
      
     
    </>
  )
}

export default App
