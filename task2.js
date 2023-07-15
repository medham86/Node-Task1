
const fs = require("fs") ;

const personAdd = (id,fname,lname,age,city) => {

    const allData = loadData() ;

    const duplicatedData = allData.filter((obj)=>{
        return obj.id === id ;
    })

    if(duplicatedData.length == 0){

        allData.push({

            id : id ,
            fname : fname ,
            lname : lname ,
            age : age ,
            city : city
    
        })

        saveAllData(allData)
    }else{
        console.log("duplicated data")
    }

}

////////////////////////////////////////////////////////////////

const loadData = () => {

        try{

            const personJson = fs.readFileSync("data10.json").toString()

            return JSON.parse(personJson) ;

        } catch {

            return [] ;
        }


 
}

////////////////////////////////////////////////////////

const saveAllData = (allData) => {

    

        const personObj = JSON.stringify(allData)

         fs.writeFileSync("data10.json" , personObj)   
}

////////////////////////////////////////////////////////////////////

const deleteData = (id) => {

    const allData = loadData() ;

    

    const dataToKeep = allData.filter((obj)=>{

        return obj.id !== id ;
    })

    
    saveAllData(dataToKeep);
    
}

/////////////////////////////////////////////////////////////////////
const listData = () => {

    const allData = loadData() ;

    try{

         allData.map((obj)=>{
    
           console.log(obj.fname  ,  obj.lname ,  obj.city) ;
            
    
        })
       
    } catch {

        return [] ;
    }
}

///////////////////////////////////////////////////////////////////////

const readPersonData = (id) => {

    const allData = loadData() ;

    const targetPerson = allData.find((obj)=>{

        return obj.id === id
    }) 

    console.log(targetPerson);

}

module.exports = {

    personAdd ,
    deleteData ,
    listData ,
    readPersonData


}