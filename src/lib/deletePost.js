import axios from "axios"

const token =localStorage.getItem('token')
export async function deletPost(postId) {
      console.log("caaaaaaaaaaaaaal")

    return  axios.delete(  `https://linked-posts.routemisr.com/posts/${postId}`,{
        headers:{
            token :localStorage.getItem("token")
        }
    })
 
}
