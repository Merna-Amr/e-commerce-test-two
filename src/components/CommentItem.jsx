import React from 'react'

export default function CommentItem({comment}) {
    
    const{content,commentCreator:{name,photo},createdAt}=comment
  return (
    <div>
        <div className='flex items-center mb-3'>
   
    <img src={photo} alt='' className='size-10 rounded-circle'/>
   <div className='mx-2 p-4 gap-5'>
      <p>{name}</p>
     <span className='text-gray-400'>{createdAt}</span>
     <p>{content}</p>
   </div>
  </div>
    </div>
  )
}
