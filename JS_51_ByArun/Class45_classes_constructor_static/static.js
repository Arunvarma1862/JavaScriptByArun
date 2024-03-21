class user{
    constructor(username){
        this.username=user.logoff()
    }
    logMe(){
        console.log(`username is ${this.username}`)
    }
    static logoff(){
        return "123"
    }
}
class teacher extends user{
    constructor(username,email){
        super(username);
        this.email=email;
    }
}
const one = new user('hello');
one.logMe()
const two= new teacher('hii',"hii@gmail.comm");
two.logMe();
// console.log(two.logoff())