import axios from 'axios'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { zodResolver } from "@hookform/resolvers/zod"
import { Rgisterscheme } from '../lib/register.schem'
import FeedBack from './FeedBack'


export default function Register() {
   const [loading,setLoading]=useState("") 
      const [err,setErorr]=useState(false) 

let navg =useNavigate()

 let {handleSubmit,register,formState:{errors}} = useForm({
    resolver: zodResolver(Rgisterscheme),
 })

 async function handleRegister(value){
  setLoading(true)
  
try {
  let response = await axios.post(
    "https://linked-posts.routemisr.com/users/signup",value);
    if(response.data.message==="success"){
       setLoading(false)
    setErorr('')
    navg("/"); 
    }
   
  
  console.log(response)

} catch (error) {
  setLoading(false)
  setErorr(error?.response?.data?.error)
}
console.log(value)

 }


  return (
    <div>
<div className='w-1/3 mx-auto my-3'>{err&&<FeedBack msg={err}></FeedBack>}</div>
      <h1 className='text-center mt-5 font-extrabold'>Register</h1>
      

<form onSubmit={handleSubmit(handleRegister)} className="w-2xl mx-auto">
  <div className="mb-5">
    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 :text-white">Your name</label>
    <input {...register("name")} type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 :bg-gray-700 :border-gray-600 :placeholder-gray-400 :text-white :focus:ring-blue-500 :focus:border-blue-500" placeholder="ahmed mhamed"  />
  
  {errors.name&&<FeedBack msg={errors.name?.message}></FeedBack>}

  </div>
   <div className="mb-5">
    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 :text-white">Your Email</label>
    <input  {...register("email")} type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 :bg-gray-700 :border-gray-600 :placeholder-gray-400 :text-white :focus:ring-blue-500 :focus:border-blue-500" placeholder="name@ahmed.com"  />
    {errors.email&&<FeedBack msg={errors.email?.message}></FeedBack>}

  </div>
 <div className="mb-5">
    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 :text-white">Your password</label>
    <input  {...register("password")}type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 :bg-gray-700 :border-gray-600 :placeholder-gray-400 :text-white :focus:ring-blue-500 :focus:border-blue-500"  />
  {errors.password&&<FeedBack msg={errors.password?.message}></FeedBack>}

  </div>
  <div className="mb-5">
    <label htmlFor="RePassword" className="block mb-2 text-sm font-medium text-gray-900 :text-white"> comfirm Your password</label>
    <input  {...register("rePassword")}type="password" id="RePassword" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 :bg-gray-700 :border-gray-600 :placeholder-gray-400 :text-white :focus:ring-blue-500 :focus:border-blue-500"  />
    {errors.rePassword&&<FeedBack msg={errors.rePassword?.message}></FeedBack>}

  </div>


  <label htmlFor="gender" className="block mb-2 text-sm font-medium text-gray-900 :text-white">Select an option</label>
  <select  {...register("gender")} id="gender" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 :bg-gray-700 :border-gray-600 :placeholder-gray-400 :text-white :focus:ring-blue-500 :focus:border-blue-500">
  {errors.gender&&<FeedBack msg={errors.gender?.message}></FeedBack>}

    <option value="male">Male</option>
    <option value="female">Female</option>
    
  </select>

   <div className="mb-5">
    <label htmlFor="dateOfB" className="block mb-2 text-sm font-medium text-gray-900 :text-white"> comfirm Your date of birth</label>
    <input  {...register("dateOfBirth")}type="date" id="dateOfB" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 :bg-gray-700 :border-gray-600 :placeholder-gray-400 :text-white :focus:ring-blue-500 :focus:border-blue-500"  />
    {errors.dateOfBirth&&<FeedBack msg={errors.dateOfBirth?.message}></FeedBack>}

  </div>

  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center :bg-blue-600 :hover:bg-blue-700 :focus:ring-blue-800"> {loading?<i className='fa-solid fa-soin fa-spinner text-stone-100'></i>:'Register'}</button>

</form>

    </div>
  )
}
