class RailwayForm{
    constructor(givenName,trainno,address){
        console.log('constructor called ' + givenName+" "+ trainno+" "+address);
        this.name=givenName;
        this.trainno=trainno;
        this.address=address;
        
    }
    preview(){
        alert(this.name+" :your form is submitted with Train No "+ this.trainno+" your Address " + this.address);
    }

submit(){
    alert(this.name+" :your form is submitted with Train No "+ this.trainno +" "+ this.address) ;
}
cancel(){
    this.trainno=0;
    alert(this.name+" your form is not submitted with Train No "+this.trainno+" " + this.address)
    
}

}

let a= new RailwayForm('haary',25332,'vizag')
a.preview()
a.submit();
a.cancel()
a.preview()
