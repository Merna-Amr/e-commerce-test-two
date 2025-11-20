import axios from "axios"

const token =localStorage.getItem('token')
export async function createComment({content,post}) {
      console.log("caaaaaaaaaaaaaal")

    return  axios.post('https://linked-posts.routemisr.com/comments',{

content,
post,


    },{
        headers:{
            token :localStorage.getItem("token")
        }
    })
   
}