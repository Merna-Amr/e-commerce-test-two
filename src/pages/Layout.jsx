import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

export default function 


() {
  return (
    <div>
      
<Navbar/>
<div className='container'>
  <Outlet/>

</div>
<footer></footer>

    </div>
  )
}
