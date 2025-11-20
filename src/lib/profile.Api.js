import axios from "axios"

const token =localStorage.getItem('token')
export async function getUserProfile(userId) {
      console.log("caaaaaaaaaaaaaal")

    return  axios.get(`https://linked-posts.routemisr.com/users/${userId}/posts`,{
        headers:{
            token :localStorage.getItem("token")
        }
    })
   
}