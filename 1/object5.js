// function user(name,email) {
//     this.name=name
//     this.email=email
    
// }


// const a=new user('ali','ashaghi');

// console.log(a);

// user.prototype.login=function () {
//     this.online=true
//     console.log('i am here dear');
// }

// function Admin(...arg) {
//     user.apply(this,arg)
//     // console.log(arg);
// }

// Admin.prototype=Object.create(user.prototype)
// const b=new Admin('abolfazl','shojai')

// console.log(b);



//class


class User {
    constructor(name,email){
        this.name=name
        this.email=email
        this.scoor=0

    }


    login(){
        console.log('log in',this.email);
        // return this
    }
    
    logout(){
        console.log('this log out',this.email);
        //   return this
    }

    updutescoor(){
        this.scoor++
        console.log(this.email,'scoor now');
        //  return this
    }
}


class Admin extends User{
 delete(user){
   users = users.filter((u) => {
     return u.email != user.email
     console.log("i am user", user.email);
   });

 }

}




var usertwo = new User("shyda.78", "shyda");

const userOne=new User('shekoo','bar')
// console.log(userOne);

const admin2=new Admin('shyda','shojai')
// console.log(admin2);

 var users=[userOne,usertwo,admin2]
 admin2.delete(userOne)

 console.log(users);

//  run =>admin2.delete(users[1])