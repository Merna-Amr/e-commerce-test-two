import React from 'react'
import { getComments } from '../lib/comments.api'
import { useQuery } from '@tanstack/react-query'
import CommentItem from './CommentItem'

export default function Comments({id}) {

    const {data,isError,isLoading,error}=  useQuery({queryKey:['comments',id],queryFn:()=>getComments(id)})
    if(isLoading)
      return<p>is Loading...</p>
    
    if(isError)
      return<h2>{error.message}</h2>
      console.log(data.data.comments)
      console.log("fffff")

  return (
    <div>{data.data.comments.map(comment=><CommentItem comment={comment} key={comment._id}></CommentItem>)}</div>
  )
}
