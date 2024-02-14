class RailwayForm{
    submit(){
        alert(this.name+this.trainno + " : your form  is Submit")
    }
    cancel(){
        alert(this.name+this.trainno +' : your form is not submit');
    }
    fill(givenName,trainno){
        this.name=givenName
        this.trainno=trainno
    }
}

let formHarry= new RailwayForm()
let formHarry2= new RailwayForm()
let formArun= new RailwayForm()

    formHarry.fill("harry",12345);
    formHarry.submit()

    formArun.fill("Arun",25687);
    formArun.submit() 

    formHarry2.fill("harry",53656)
    formHarry2.submit() 

    formHarry.cancel()
