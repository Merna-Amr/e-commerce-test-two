import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { useParams } from 'react-router-dom'
import { getPostDetails } from '../lib/Postdetail'
import Loading from '../components/Loading'
import PostsItem from './PostsItem'

export default function PostDetails() {

  const{id}  =useParams()

const {data,isError,isLoading,error}=  useQuery({queryKey:['post',id],queryFn:()=>getPostDetails(id)})

if(isLoading)
  return<Loading></Loading>

if(isError)
  return<h2>{error.message}</h2>
  console.log(data)
  console.log("fffff")

  return (
    <>
      <PostsItem post={data.data.post}></PostsItem>

    </>
  )
}
