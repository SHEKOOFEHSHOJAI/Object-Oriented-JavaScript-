// let name='shayn';
// console.log(name>'Shayn');
// //s next form c
// console.log(name > "crystal");

// loose comprason
let age = 25;
console.log(age == "25");
console.log(age != "25");
console.log(age != "25");

// strict comparison(diffferent types cannot be equal)
// injavascript string convert to number

// === js cannot conver to number with strict comparson
console.log(age === "25");
console.log(age !== "25");

// type conversion

// let score='100';
// score=Number(score)
// console.log( score + 1);
// console.log(typeof score+1);

// i canot
let result = Number("hello");

console.log(result);

// i can
let result1 = String(50);

console.log(typeof result1);

// true
let result2 = Boolean(50);
// return false
let result3 = Boolean("");

console.log(typeof result2);

// FLLOW CONTROLL

// for loop

const name = ["shun", "mario", "luigi"];

// for(var i=0;i<name.length;i++){
//     let html=`<div>${name[i]}</div>`
//     console.log(html);
// }

// ============WHILE LOOP
// let i=0;
// while(i<5){

//     console.log("i am very good my dear");
//     i++;
// }

// let i=0;
// while (i<name.length) {
//     console.log(name[i]);
//     i++
// }

// ==================================== DO WHILE

// when i want run one even code not ture

// let b=5;
// do{
//     console.log('val of is:',b)
//     b++
// }
// while(b<5)

// CONDITIONAL STATE
// const ninja=['shun','ryn','chun-li','yoshi'];
// const y="oooo"
// console.log(y.length);
// if(ninja.length>3){

//     console.log("that is a lot of nunjas");
// }

// ELSE IF STATEMENTS

// logical operators

const password = "p@ass";
if (password.length >= 12 && password.includes("@")) {
  console.log("that password is mighty serong");
}

// logical not(!)

let user = false;
if (!user) {
  console.log(" i am okey");
}

// breack and continue

const score = [50, 25, 0, 30, 100, 20, 10];

for (let i = 0; i < score.length; i++) {
  if (score[i] === 0) {
    continue;
  }
  if (score[i] === 100) {
    console.log("congrats you got the top score!");

    break;
  }
}

// useing statement

// varables & block scope

// global scope

let age2 = 30;
if (true) {
  // local scope
}

// block scope{}

// function decoration

// function name(params) {

// }
// name()
// // function expration or regular function

// let speak=function(){

// }
// speak()

// argument and params

// const speak2=function (params) {

// }
// speak2(`argument`)

// const clasckArea = function (radious) {
//   let area = 3.14 * radious ** 2;
//   return area;
// };




// const area = clasckArea(5);
// console.log(area);

// arrow function

// clallbacks & foreach
const myfunc = (callbacFunc) => {
  let value = 50;
  callbacFunc(value);
};

myfunc(function (value) {
  console.log(value);
});

let people = ["mario", "luigi", "ryn", "shaun"];
// 4 itrite  1         2      3     4

people.forEach((person, index) => {
  console.log(index, person);
});

///get refrence to the 'ul

const ul = document.querySelector(".people");
const people3 = ["mario", "luigi", "ryu", "shaun"];
let html = ``;
people3.forEach((person) => {
  html += `<li style="color:green">${person}</li>`;
});

console.log(html);
ul.innerHTML = html;

// create obj and use object literal notation

let user4 = {
  name: "crystal",
  age: 30,
  email: "crystal.com",
  blogin: function () {
    this.name;
  },

  // regular function
  blogout() {
    this.name;
  },
};

console.log(user4.name);

user4.name = "shekoofeh";
user4["age"] = 25;

let key = "age";
console.log(user4[key]);

// key word this=> is contect object
user4.blogin();

// object in array
// https://ganjoor.net/moulavi/masnavi/daftar1/sh4

// Math object
console.log(Math.E);

const area4=7.7;
console.log(Math.round(area4));
// 
console.log(Math.floor(area4));
console.log(Math.ceil(area4));
// delete digit
console.log(Math.trunc(area4));

console.log(Math.random()*100);

// primitive & refrence

// primitive  value
// don't change becase has two refrence in stack
// let scoreOne=50;
// let scoreTwo=scoreOne;
// console.log(`scoreOne: ${scoreOne},${scoreTwo}`)
//  scoreOne = 50;
// console.log(`scoreOne: ${scoreOne},${scoreTwo}`);


// refrence value
// refrense example arry object number 
// change  becase one saved in stack
// let userThree={name:"shekoofeh",age:"null"}
// let userFour = userThree;
// userFour.age=23;
// console.log(userThree,userFour);




// concat

let listItem=['blog','shoes','dress']
let colors=['blue','green','red'];
console.log(listItem.reverse());
console.log(listItem.push("my"));
console.log(colors.concat(listItem));
// delete first elemnt
console.log(listItem.shift());

// show length and add alooo to array
console.log(listItem.unshift('aloooo'));
// slice -1
console.log(listItem.slice(0,1));

// sort alfba character

console.log(listItem.sort())



// METHOD FIND
// IF DON'T FID RETURN UNDEFINED
const person = [
  {
    name: "florin",
    age: 20,
  },
  {
    name: "ivan",
    age: 18,
  },

  {
    name: "nastaran",
    age: 12,
  },
];



const pre=(person)=>{
    return person.name==="florin";
    
}
let find=person.find(pre);

console.log(find);

const array1 = [5, 12, 8, 130, 44];

const found = array1.find(element => element > 10);

console.log(found);
// expected output: 12




const inventory = [
  {name: 'apples', quantity: 2},
  {name: 'bananas', quantity: 0},
  {name: 'cherries', quantity: 5}
];

function isCherries(fruit,index) {
  return fruit.name === 'cherries';
}

console.log(inventory.find(isCherries));
// { name: 'cherries', quantity: 5 }


// filter return arr
const num=[1,2,3,4,5,6]

let even=num.filter((vlue)=>vlue%2==0)

console.log(even);

// output [2,4,6]


let v=[2, 4, 6].filter((ele)=>ele>=4)
console.log(v);

const defult = people.filter((person) => person.age >= 18);
console.log(defult);


     //   0 1 2 1 0 2 2 7 8
let num5=[1,2,3,2,1,3,3,5,4]

const nums=num5.filter((value,index,arr)=>{
//  console.log(  arr.indexOf(value));
 return arr.indexOf(value)===index
})


console.log(nums);
// output   [1, 2, 3, 5, 4]




// reduce

// reduce(callbackfun,intioalvalue)



const num6=[1,2,3,4,5,6,7]
const total= num6.reduce(sum,0)

function sum(accumulator,value) {
    return accumulator+value
    
}

console.log(total);
// 0 1 3 6 10 15 21 28





const array4 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4





const array = [15, 16, 17, 18, 19];

function reducer(previous, current, index) {
  const returns = previous + current;
  console.log(
    `previous: ${previous}, current: ${current}, index: ${index}, returns: ${returns}`
  );
  return returns;
}

array.reduce(reducer);

// output

// previous: 15, current: 16, index: 1, returns: 31
//  previous: 31, current: 17, index: 2, returns: 48
// previous: 48, current: 18, index: 3, returns: 66
// previous: 66, current: 19, index: 4, returns: 85



// reducer

let redu = [15, 16, 17, 18, 19].reduce(
  (previousValue, currentValue) => {
    // is sum previousValue
    // currentValue=>each element array
    return previousValue + currentValue;

    //    10 is initioalValue
  },10
);
console.log(redu);





// async await

// async => Other codes are executed at the same time




//==============================Asynchronous JavaScript


// synchronous =>run code line to line  from top to botton

// Asynchronous  pass request to browser and callback get data ---code don't await to get data go to run other code 



// http requst
const request=new XMLHttpRequest();


request.addEventListener('redystatechange',()=>{
  if(request.readyState===4){
    console.log(request,request.responseText);
  }
})
request.open("GET","https://jsonplaceholder.typicode.com/todos/");
request.send()
console.log(request);

// status

// 100  200 true
// 300 change router
// 400 error
// 500 error server

// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((response) => response.json())
//   .then((json) => console.log(json));



// console.log(1);
// console.log(2);

// setTimeout(() => {
  
//   console.log(3);
// }, 5000);
// console.log(4);
// console.log(5);


// output 1 2  4  5   3


// callback =for code  run in line to line


function firstLOg() {
  
console.log(1);
console.log(2);

}


function middleLog(callback) {
  setTimeout(() => {
    console.log(3);
    callback()
  }, 5000);
}


function lastLog() {
    console.log(4);
    console.log(5);
  
}

firstLOg()
middleLog(lastLog)

// output 1,2 ,3 ,4 ,5


// for Escape callbsckfanc=promise 
// promise
let mypromise=new Promise((res,reject)=>{

})



// chaining promise

let wordPromis=new Promise((resolve,reject)=>{
  let text="shekoofeh";
  if(text){
    resolve(text)

  }else{
    reject(new Error('text is empity'))

  }
})

// console.log(wordPromis);
// /promise chaining handler
wordPromis.then((resole)=>{
  return resole.split("")
 
}).then((res2)=>{

        console.log(res2);
      return res2.reverse()
}).then((response)=>{

  console.log(response);
  return response
})


// fetch api
fetch("https://jsonplaceholder.typicode.com/todos/1")
.then((res)=>{
  console.log(res);
// return  res.json()
})

.then((re)=>{
console.log(res);
})

.catch((err)=>{
  console.log(err);
})
