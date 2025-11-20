import { createContext, useEffect, useState } from "react";
import { getUserData } from "../dataUserApi";


 export const Auth =createContext()
export default function AuthContextProvider({children}){
    const [isLogin,setLogin] =useState()
const[userData,setData]=useState(null)

   async function GetUserfun(){

    const response=await getUserData()
setData(response.data.user)

   }
     useEffect(()=>{
         if(localStorage.getItem('token'))
           { setLogin(localStorage.getItem('token'))
        GetUserfun()}
     },[])

   


    return <Auth.Provider value={{isLogin,setLogin,userData}}>
        {children}
    </Auth.Provider>
}