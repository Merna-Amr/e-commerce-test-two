import React from 'react'
import { useParams } from 'react-router-dom'
import { getUserProfile } from '../lib/profile.Api'
import { useQuery } from '@tanstack/react-query'
import PostsItem from './PostsItem'

export default function Profile() {
    const{id}  =useParams()

const {data,isError,isLoading,error}=  useQuery({queryKey:['profile',id],queryFn:()=>getUserProfile(id)})
console.log(data)
  return (
    <div>{data?.data?.posts?.map(post=><PostsItem key={post._id} post={post}></PostsItem>)}
    </div>
  )
}
