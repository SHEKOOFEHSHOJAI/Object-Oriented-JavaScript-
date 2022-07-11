class User{
    constructor(email,name){
        this.email =email;
        this.name=name
        this.scoor=0
    }
    login(){
        console.log(this.email,'just log in');
        return this;
    }

    logout(){
        console.log(this.email,'log out')
    
         return this
    }

    upduteScore(){
        this.scoor++;
       console.log(this.email,'score is now',this.scoor );
    
    
        return this
    }
   
}


 class Admin extends User {
   delteUser(user) {
     users = users.filter(u=>{
        // return u.email != user.email
        console.log("i am user", user.email);
     });
     
   }

 }

var userone=new User('shekoofeh.78','shekoofeh')
var usertwo= new User("shyda.78", "shyda");
// console.log(userone);
// console.log(usertwo);
// userone.login()
// usertwo.logout()
// userone.upduteScore()

userone.login().upduteScore().upduteScore().logout();
var admin=new Admin('sheeeee','shookofe')

var users=[userone,usertwo,admin]
admin.delteUser(usertwo)
console.log(users);