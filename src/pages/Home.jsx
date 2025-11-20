import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react'
import { getPosts } from '../lib/PostsApi';
import PostsItem from './PostsItem';
import Loading from '../components/Loading';
import AddPost from '../components/AddPost';

export default function Home() {

  console.log()


  const {isLoading,isError,error,data}=useQuery({queryKey:['posts'],queryFn:getPosts,})
if(isLoading)
  return<Loading></Loading>

if(isError)
  return<h2>{error.message}</h2>
  console.log(data)
    
  return (
    <div>
      <AddPost></AddPost>
{data?.data?.posts?.map(post=><PostsItem key={post._id} post={post}></PostsItem>)}
    </div>
    
  )
}
