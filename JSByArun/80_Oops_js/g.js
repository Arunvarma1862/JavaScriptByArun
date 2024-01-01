class user{
    constructor(key){
        this.name=key
    }
    get name(){
        return this._names;
    }
    set name(value){
        if(value.length < 4){
            console.log("name is short");
            return;
        }
        this._names=value
    }
}

let a = new user("john");
console.log(a.name);

// a.name="Hel"
a= new user("Hello")
console.log(a.name)