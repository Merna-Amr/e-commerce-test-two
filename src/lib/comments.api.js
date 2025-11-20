import axios from "axios"

const token =localStorage.getItem('token')
export async function getComments(postId) {
      console.log("caaaaaaaaaaaaaal")

    return  axios.get(`https://linked-posts.routemisr.com/posts/${postId}/comments`,{
        headers:{
            token :localStorage.getItem("token")
        }
    })
   
}