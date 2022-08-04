const getBtn = document.getElementById("get-btn");
const postBtn = document.getElementById("post-btn");




const sendHttpRequest=(method,url)=>{


     const xhr = new XMLHttpRequest();
     console.log(xhr.open);
     xhr.open(method, url);
     xhr.responseText = "json";
     xhr.onload = () => {
       // let parse = JSON.parse(xhr.response);
       let parse = xhr.response;
       console.log(parse);
     };

     xhr.send();
    
}
const getData = () => {

     sendHttpRequest("GET", "https://reqres.in/api/users?page=2");
};

const sendData = () => {};

getBtn.addEventListener("click", getData);
postBtn.addEventListener("click", sendData);
