var useone={
    email:'shekoofehshojai',
    name:'shekoofeh',
    login(){

        console.log(this.email,'has login in')

    }
    ,
    logout(){

     console.log(this.email,'has log out')
    }
}
useone.name='yoshi';
//can poya
var prop='name';
  console.log("prop...",useone[prop]);       
useone['name']='shojai'
console.log(useone.name);
console.log(this);

useone.logInfo=function(){}
useone.age=25;
console.log(useone);