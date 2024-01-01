let students=["Arun","harry","sachin","ganesh","Ramesh",'Annapurna',"Rameshwaram","gitesh","venkateshwara"];
let house=[];

for(const student of students){
    if(student.length<6){
        house.push("America house")
    }
    else if(student.length <8){

        house.push("India house");

    }
    else if(student.length <10){
        house.push("russia house");
        
    }
    else{
        house.push("Uk house")
    }
}
console.log(house)