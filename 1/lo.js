

// function
// console.log(1)
// var _k=4;
// console.log(_k)
// let firstName="shekoofeh";
// let lastName="shojai";
// console.log(lastName.length);
// //method  =>function  connect with object

// let a = firstName.toUpperCase();
// console.log(firstName);
// let email='shekoofeh.78'
// let index=email.indexOf('e')
// // show index last charather (h)
// console.log(email.lastIndexOf('h'));

// console.log(email.slice(0,4));
// console.log(email.substr(0, 4));

// console.log(email.replace('sh','m'));

// // math operators +,-,*,/,**,%
// // order oprators -B=braket I=tavan m=*
// let result=5*(10-3)**2

// // template string
// console.log(email+result+"  "+"i am oket"+result);

// // Template Strings for many varible
// let templtaString=`the blog called ${email}  by s`;

// // creating html teml]plate
// let html=`<h2>${email}</h2>`;
// let ninja=['shayan','ryn','chun-li'];
// // exit from arr and between add (,)
// let join=ninja.join(',')
// console.log(join)
// // concat two arr
// let concat=ninja.concat(['shyda','crystal'])
// let push=ninja.push('a am pushhh')
// ninja.pop()
// console.log(ninja);


// // methods can return boolean
// let includes=email.includes('sh')
// console.log(includes);
// let age=23;
// console.log(age==23);
// // in javascript chracter samll biger than 
// let name='shayn';
// console.log(name>'Shayn');
// //s next form c
console.log(name > "crystal");




// function sum1_100() {
//   var sum = 0,
//     num = 1;
//   do {
//     sum += num;
//     // 0+1  1+2=3
//     console.log(sum);
//     num++;
//     console.log("i am num"+num);
//     // 2 3
//   } while (num <= 100);
//   console.log("i am sum name"+sum);
//   return sum;
// //   1 ,3 6
// }
// sum1_100(); 
 
// function padIt(str, n) {
//   let res = str;

//   let i = 0;
//   while (i < n) {
//     if (i % 2 === 0) {
//       res = `*${res}`;
//     } else {
//       res = `${res}*`;
//     }

//     i += 1;
//   }
// console.log(res);
//   return res;
// }
// padIt("a",0)



// function dontDisplayNegative(arr) {
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] < 0) z
//     console.log(arr[i]);
//   }
// }
// dontDisplayNegative(4);


//  let dolls=["Hello Kitty", "Barbie doll"];

// function grabDoll(dolls){
//     var bag=[];
//     //coding here
//     for(let i = 0; i < dolls.length; i++) {
//       if (bag.length === 3){
//         break
//       }
//       if (dolls[i] === 'Hello Kitty' || dolls[i] === 'Barbie doll'){
//         bag.push(dolls[i])
//       }
//       continue
//     }
//     return bag;
//   } 
  
  

// var num = Number(1.7976931348623157e308);
// console.log("++++" + num.MAX_VALUE);
 

// const whatNumberIsIt =
//   n >
//   `Input number is ${
//     n == Number.POSITIVE_INFINITY
//       ? "POSITIVE_INFINITY"
//       : n == Number.NEGATIVE_INFINITY
//       ? "NEGATIVE_INFINITY"
//       : n == Number.MAX_VALUE
//       ? "Number.MAX_VALUE"
//       : n == Number.MIN_VALUE
//       ? "Number.MIN_VALUE"
//       : Number.isNaN(n)
//       ? "Number.isNaN"
//       : n
//   }`;



//   var num=111;
// var j=num.toString(); 
//    var b=num.toLocaleString(); 
//   var  c=num+""
// console.log([j,b,c])  
// console.log([j]); 



// They are converted to binary, octal and hexadecimal.
// var num=111;
// var l=num.toString(2)
//   var  b=num.toString(8) 
//   var  c=num.toString(16) 
// console.log([l,b,c])
// console.log(8*111);
//output: [ '1101111', '157', '6f' ]


// radix is optional parameter. if ignored it, the output will be the default decimal. If not, like this:

// NumberObject.toString(radix);


// function colorOf(r, g, b) {
//   r = r.toString(16);
//   g = g.toString(16);
//   b = b.toString(16);
//   console.log("berore bule"+b.toString(16));
// // red= ff green=0  b=0   if g= 0 b=0
// // red 0   green=6f  b=0   if r= 0  b=0
// // red 1   green=2   b=3   r==0 b=0 g=0
// // blue 0  
// //   console.log("berore green" + g);
// //   console.log("berore blue" + b);
//   if (r.length < 2) {
//     r = "0" + r;
//     // console.log("red is"+
//     // r);
//   }
//   if (g.length < 2) {
//     g = "0" + g;
//     // console.log("green is"+g);
//   }
//   if (b.length < 2) {
//     b = "0" + b;
//     // console.log("blue is "+b);
//   }

//   return "#" + r + g + b;
// }



// colorOf(255,0,0) 
// colorOf(0,111,0) 
// colorOf(1, 2 ,3)

// should return "#ff0000"
// d return "#006f00"
//  should return "#010203"






let tofix = 111.11;

console.log(tofix.toFixed(1));
console.log(tofix.toExponential(1));
console.log(tofix.toPrecision(1));