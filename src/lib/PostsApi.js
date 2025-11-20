import axios from "axios"

const token =localStorage.getItem('token')
export async function getPosts() {
      console.log("caaaaaaaaaaaaaal")

    return  axios.get('https://linked-posts.routemisr.com/posts?sort=-createdAt',{
        headers:{
            token :localStorage.getItem("token")
        }
    })
   
}