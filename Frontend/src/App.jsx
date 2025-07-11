import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import MyAppointment from './pages/MyAppointment'
import MyProfile from './pages/MyProfile'
import Header from './components/Header'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'> 
    <Navbar/>
     <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/login' element={<Login/>}/>
     <Route path='/my-profile' element={<MyProfile/>}/>
      <Route path='/my-appointments' element={<MyAppointment/>}/>
      

       

     </Routes>
    </div>
  )
}

export default App
