import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import Comments from '../components/Comments'
import CreateComent from './CreateComent'
import { Auth } from '../lib/context/loginConText'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deletPost } from '../lib/deletePost'
import toast from 'react-hot-toast'

export default function PostsItem({post}) {
  const{userData} =useContext(Auth)
  const queryClient = useQueryClient()

    // console.log(data?.post)
    const{body,image,_id,user:{name,photo,_id:userId},createdAt}= post
    const[isOpen,setOpen]=useState(false)
    const{data,isPending,mutate}=useMutation({mutationFn:deletPost,onSuccess:()=>{queryClient.invalidateQueries({ queryKey: ['posts'] })
        if(userData?._id){
      queryClient.invalidateQueries({ queryKey: ['profile',userData._id] })
    }
}
  })

  
  return (
    
    

<div className="max-w-2xl mx-auto my-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700">
  {isPending&& toast('is loading...')}
 <div className='flex items-center justify-between p-4'>
   <div className='flex items-center mb-3'>
   
    <img src={photo} alt='profile photo' className='size-20 rounded-2xl'/>
   <div className='mx-2'>
      <p>{name}</p>
     <span className='text-gray-400'>{createdAt}</span>
   </div>
  </div>
  {userId==userData?._id&&  <i onClick={()=>mutate(_id)} className='fa-solid fa-close fa-xl cursor-pointer'></i>
}
 </div>
  <Link to={`/posts/${_id}`}>
    <img className="w-full " src={image} alt />
  </Link>
  <div className="p-5">
   
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{body}</p>
    <div className=' flex justify-between border-b-black'>
      <i className='fa-solid fa-share'></i>
       <i onClick={()=>setOpen(!isOpen)} className='fa-solid fa-comment'></i>
<i className='fa-solid fa-thumbs-up'></i>


    </div>
  </div>
 {isOpen&& <>
 <CreateComent id={_id}></CreateComent>
 <Comments id={_id}></Comments>
 </>}
</div>


  )
}
