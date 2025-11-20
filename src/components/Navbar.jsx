import React, { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { Auth } from '../lib/context/loginConText.jsx'
import { useContext } from 'react'
import { useDeferredValue } from 'react'

export default function Navbar() {
  const {setLogin,isLogin,userData}=useContext(Auth)
  console.log(userData)
  const [isOpen,setOpen] =useState(true)

  const nvg =useNavigate()
  function Toogle(){
    setOpen(!isOpen)
  }

  function Logout(){

    setLogin(null)
    localStorage.removeItem("token")
    nvg('/')

  }
  return (
    <div>
      

<nav className="bg-white border-gray-200 dark:bg-gray-900">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <Link to="/home" className="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
    </Link>
    <button onClick={Toogle} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div className= {`${isOpen&&'hidden'} w-full md:block md:w-auto`} id="navbar-default">
     
     <ul className="font-medium flex items-center flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
       
       {
        isLogin?<>
          <li>
          <NavLink to="/home" className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">home</NavLink>
        </li>
        <li>
          <NavLink className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page" onClick={ Logout}>logOut</NavLink>
        </li>
        <li>
         <Link to={`/profile/${userData?._id}`} className='flex gap-3 text-amber-50'>
          <img src={userData?.photo} className='size-6 rounded-circle'/>
          <span>{userData?.name}</span>
          </Link>
        </li>
        </>
        :
        <>
          <li>
          <NavLink to="/" className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Login</NavLink>
        </li>
          <li>
          <NavLink to="/register" className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Register</NavLink>
        </li>
        </>


       }
      
        <li>
          
<label className="inline-flex items-center cursor-pointer">
  <input type="checkbox" defaultValue className="sr-only peer" defaultChecked />
  <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600" />
  <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300"> 
    <i className='fa-solid fa-sun'></i>
        <i className='fa-solid fa-moon'></i>

  </span>
</label>

        </li>
       
      </ul>
    </div>
  </div>
</nav>

    </div>
  )
}
