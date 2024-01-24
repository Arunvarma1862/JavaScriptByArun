

class RailwayForm{
    constructor(givenName,trainno){
        console.log('constructor called ' + givenName+" "+ trainno);
        this.name=givenName;
        this.trainno=trainno;
        
    }

submit(){
    alert(this.name+" :your form is submitted with Train No "+ this.trainno);
}
cancel(){
    alert(this.name+" your form is not submitted with Train No "+this.trainno)
}


}

let Harryform=new RailwayForm("harry",12345);
let ArunKumarform=new RailwayForm("ArunKumar",52362);

Harryform.submit();
ArunKumarform.submit();
ArunKumarform.cancel()

