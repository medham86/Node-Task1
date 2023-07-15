
const fs = require("fs")

const person = {
    fname : "ahmed" ,
    lname : "hossam" ,
    age : "20" ,
    city : "alex"
}


const personJson = JSON.stringify(person); 

fs.writeFileSync("data.json" , personJson);

const importedDataJson =  fs.readFileSync("data.json").toString();

const personObject = JSON.parse(importedDataJson) ;

personObject.fname = "adel" ;
personObject.lname = "ahmed" ;
personObject.age = "40";
personObject.city = "cairo" ;

const personUpdatedJson = JSON.stringify(personObject) ;

fs.writeFileSync("data.json" , personUpdatedJson) ;



