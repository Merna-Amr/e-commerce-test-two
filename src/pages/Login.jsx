import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { zodResolver } from "@hookform/resolvers/zod"
import { Loginscheme } from '../lib/login.schem'
import FeedBack from './FeedBack'
import { Auth } from '../lib/context/loginConText.jsx'

export default function Login() {
const {setLogin}=useContext(Auth)
     const [loading,setLoading]=useState("") 
      const [err,setErorr]=useState(false) 

let navg =useNavigate()
useEffect(()=>{
  if(localStorage.getItem('token')){
    navg('/home')
  }

},[navg])

 let {handleSubmit,register,formState:{errors}} = useForm({
   resolver: zodResolver(Loginscheme),
 })

 async function handleRegister(value){
  setLoading(true)
  
try {
  let response = await axios.post(
    "https://linked-posts.routemisr.com/users/signin",value);
    if(response.data.message==="success"){
       setLoading(false)
    setErorr('')
    localStorage.setItem('token',response.data.token)
    setLogin(response.data.token)
    navg("/home")
    }
   
  
  console.log(response.data)

} catch (error) {
  setLoading(false)
  setErorr(error?.response?.data?.error)
}
console.log(value)


 }

  return (
    <div>
      <h1 className='text-center mt-5 font-extrabold'>Login</h1>
      

<form onSubmit={handleSubmit(handleRegister)} className="w-2xl mx-auto">

   <div className="mb-5">
    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 :text-white">Your Email</label>
    <input  {...register("email")} type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 :bg-gray-700 :border-gray-600 :placeholder-gray-400 :text-white :focus:ring-blue-500 :focus:border-blue-500" placeholder="name@ahmed.com" required />
  {errors.email&&<FeedBack msg={errors.email?.message}></FeedBack>}
  </div>
 <div className="mb-5">
    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 :text-white">Your password</label>
    <input  {...register("password")}type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 :bg-gray-700 :border-gray-600 :placeholder-gray-400 :text-white :focus:ring-blue-500 :focus:border-blue-500" required />
  {errors.password&&<FeedBack msg={errors.password?.message}></FeedBack>}
  </div>

  


  



   

  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center :bg-blue-600 :hover:bg-blue-700 :focus:ring-blue-800">Login</button>
<p className='my-3.5'>dont have accout ?  <Link to={'/register'} className='text-blue-500 font-bold'>register</Link></p>
</form>

    </div>
  )
}
