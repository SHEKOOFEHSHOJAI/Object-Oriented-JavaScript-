// const getBtn = document.getElementById("get-btn");
// const postBtn = document.getElementById("post-btn");

// const sendHttpRequest = (method, url) => {
//   const promise=new promise((resolve,rej)=>{
    
//  const xhr = new XMLHttpRequest();
//   console.log(xhr.open);
//   xhr.open(method, url);
//   xhr.responseText = "json";
//   xhr.onload = () => {
//     // let parse = JSON.parse(xhr.response);
//     resolve(xhr.response);
//     console.log(parse);
//   };

//  xhr.send();

//   })

//  return promise
// };
// const getData = () => {
//   sendHttpRequest
//   ("GET", "https://reqres.in/api/users?page=2")
//   .then((data)=>{
//     // const data=xhr.response;
//     console.log(data);
//   })
// };

// const sendData = () => {};

// getBtn.addEventListener("click", getData);
// postBtn.addEventListener("click", sendData);


// axios.get("https://jsonplaceholder.typicode.com/todos")
// .then((res) => {
// return res.data
// }).then((res)=> console.log(res)).catch(e=>console.log(e))


// axios
//   .get("https://jsonplaceholder.typicode.com/todos")
//   .then(res => {
//     console.log(res.data);
//   })
//   .catch(e => console.error(e));



//   const fetchUsers = async() => {
//   try {
//     const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
//     console.log(res);
//   } catch (e) {
//     console.error(e);
//   }
// };

// fetchUsers();

// ============================get joke

// const jokes = document.querySelector("#jokes");
// const button = document.querySelector("button");

// const addNewJok=async()=>{
//   try{
//      const res=await getDad();
//   const li=document.createElement('li')
//   li.append(res)
//   jokes.append(li)
//   }
//   catch(e){
//    console.log(e)
//   }
 
// }

// const getDad=async()=>{
//   try{
//     const config = { headers: { Accept: "application/json" } };
//     const res=await axios.get("https://icanhazdadjoke.com/",config)  
//     console.log(res)
//     return res.data.joke
//   }
//     catch(e){
//       console.log(e);

//   }
// }



// button.addEventListener("click", addNewJok);

