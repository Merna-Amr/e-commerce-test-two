import axios from "axios"

const token =localStorage.getItem('token')
export async function createPost(formdata) {
      for (let [key, value] of formdata.entries()) {
  console.log(key, value)
}

    return  axios.post('https://linked-posts.routemisr.com/posts', formdata,{
        headers:{
            token :localStorage.getItem("token"),
            'Content-Type':'multipart/form-data'
        }
    })
   
}