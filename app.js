
const task1 = require("./task1.js") ;

const yargs = require("yargs")
const task2 = require("./task2.js") ; 

yargs.command({
    command:"add" ,
    describe : "to add person" ,
    builder :{
        id : {
            describe : "add id" ,
            demandOption : true ,
            type : "string"
        },
        fname : {
            describe : "add first name" ,
            demandOption : true ,
            type : "string"
        },
        lname : {
            describe : "add last name" ,
            demandOption : true ,
            type : "string"
        }
    },
    handler : (x) => {
        
        task2.personAdd( x.id , x.fname , x.lname , x.age , x.city )
         
    }
})

///////////////////////////////////////////////////////////////////////

yargs.command({

    command : "delete" ,
    describe : "to delete data" ,
    builder : {
        id : {
            describe : "to delete by id" ,
            demandOption :true,
            type:"string"
        }
    },
    handler : (x)=>{

        
        task2.deleteData(x.id) 

    }
})

//////////////////////////////////////////////////////
yargs.command({

    command : "list" ,
    describe : "to list data" ,
    handler : ()=>{

        task2.listData() ;
    }
})

//////////////////////////////////////////////////////

yargs.command({

    command : "read" ,
    describe : "to read data" ,
    builder : {
        id : {
            describe : "to read data person" ,
            demandOption : true ,
            type : "string"
        }
    },
    handler : (x)=>{

        task2.readPersonData(x.id) ;
    }
})


yargs.parse()











