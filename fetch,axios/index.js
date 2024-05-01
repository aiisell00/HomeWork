import { URL } from "./constant.js";
fetch(`${URL}`,{
  method: 'Get'
})
.then((res)=>res.json())
.catch((err)=>{
  console.log(err)
})
function addnewData(payload) {
  fetch(`${URL}`,{
    method:'POST',
    headers:{
      'Content-type':'Application/json'
    },
    body: JSON.stringify(payload)
  });
}
function deleteDataById(id) {
  fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  })
    .then((res) => console.log(res))
    .catch((err) => {
      console.log(err);
    });
}

const newPost ={
  id: 'azmp-101',
  name: 'Mamedova Aysel'
}
addnewData(newPost)
// deleteDataById(WARFACE);
