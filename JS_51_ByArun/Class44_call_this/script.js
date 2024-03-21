function setUserName(username){
    // complex DB calls
    this.username= username;
}
function createUserName(username, email, place){
    setUserName.call(this,username)

    this.email=email;
    this.place=place;
}

const User=  new createUserName("chai","chai@gmail.com","bhiali");
console.log(User)