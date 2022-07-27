

// function
console.log(1)
var _k=4;
console.log(_k)
let firstName="shekoofeh";
let lastName="shojai";
console.log(lastName.length);
//method  =>function  connect with object

let a = firstName.toUpperCase();
console.log(firstName);
let email='shekoofeh.78'
let index=email.indexOf('e')
// show index last charather (h)
console.log(email.lastIndexOf('h'));

console.log(email.slice(0,4));
console.log(email.substr(0, 4));

console.log(email.replace('sh','m'));

// math operators +,-,*,/,**,%
// order oprators -B=braket I=tavan m=*
let result=5*(10-3)**2

// template string
console.log(email+result+"  "+"i am oket"+result);

// Template Strings for many varible
let templtaString=`the blog called ${email}  by s`;

// creating html teml]plate
let html=`<h2>${email}</h2>`;
let ninja=['shayan','ryn','chun-li'];
// exit from arr and between add (,)
let join=ninja.join(',')
console.log(join)
// concat two arr
let concat=ninja.concat(['shyda','crystal'])
let push=ninja.push('a am pushhh')
ninja.pop()
console.log(ninja);


// methods can return boolean
let includes=email.includes('sh')
console.log(includes);
let age=23;
console.log(age==23);
// in javascript chracter samll biger than 
let name='shayn';
console.log(name>'Shayn');
//s next form c
console.log(name > "crystal");
