import axios from "axios"

const token =localStorage.getItem('token')
export async function getPostDetails(postId) {
      console.log("caaaaaaaaaaaaaal")

    return  axios.get(`https://linked-posts.routemisr.com/posts/${postId}`,{
        headers:{
            token :localStorage.getItem("token")
        }
    })
   
}