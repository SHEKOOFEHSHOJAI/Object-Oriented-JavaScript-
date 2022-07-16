function user(email,name) {
    this.email=email
    this.name=name;
    this.login=function(){
        console.log(this.email,"has log in");
    }
}


user.prototype.login=function() {
    this.online=true
    console.log(this.email,'has log in');
}

user.prototype.logout = function () {
    this.online=true
  console.log(this.email, "has log out");
};

function Admin(...args) {
    user.apply(this,args)
    console.log("i am argggg",args);

    this.role='super admin'
}

Admin.prototype=Object.create(user.prototype)

Admin.prototype.deleteuser=function() {
   users=users.filter(user=>{
    return user.email !=user.email
   }) 
}

var main=new Admin("bani",'rezai')
var userone=new user('shekoofeh','sh');
var users=[userone]
console.log(main);