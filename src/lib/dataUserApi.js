import axios from "axios"

const token =localStorage.getItem('token')
export async function getUserData() {
      console.log("caaaaaaaaaaaaaal")

    return  axios.get("https://linked-posts.routemisr.com/users/profile-data",{
        headers:{
            token :localStorage.getItem("token")
        }
    })
   
}