
class password{
    constructor(){
        console.log("password generator");
        this.pass=""
    }
    generatePassoword(len){

            let chars="abcdefghijklmnopqrstuvwxyz"
            let numbers="1234567890";
            let special="!@#$%&*()_+"

        if(len<=3){
            console.log('password length should be greater than 3')
        }
        else{
            let i=0;
            while(i<len){
                
                this.pass += chars[Math.floor(Math.random()*chars.length)]
                this.pass += numbers[Math.floor(Math.random()*numbers.length)]
                this.pass += special[Math.floor(Math.random()*special.length)]
                i =i+3;
            }
            this.pass=this.pass.substring(0,len)
            // console.log(this.pass)
            return this.pass;
        }
    }
}
// let p= new password();
// console.log(p.generatePassoword(8))
// let ran= Math.floor(Math.random()*26)
//                 console.log(ran);

    let btn= document.getElementById('btn');
    btn.addEventListener('click',()=>{
       
        let inpEle = document.getElementById('passwordInput');
        let p= new password();
        console.log(p.generatePassoword(8))
        const dv=p.generatePassoword(8)
        inpEle.value=dv;
       
    })            
    let but=document.getElementById('btn-2')
    but.addEventListener('click',function myFunction() {
        // Get the text field
        var copyText = document.getElementById("passwordInput");
      
        // Select the text field
        copyText.select();
        copyText.setSelectionRange(0, 99999); // For mobile devices
      
         // Copy the text inside the text field
        navigator.clipboard.writeText(copyText.value);
    })

    