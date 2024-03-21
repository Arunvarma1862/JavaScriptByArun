const user={
    _email:"Hello @gmail.com",
    _Password:"nddj",

    get email(){
        return this._email.toUpperCase()
    }
    ,
    set email(value){
        this._email=value
    }
}

const amk=  Object.create(user)
amk.email="hello"
console.log(amk.email)