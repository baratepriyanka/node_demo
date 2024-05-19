const connection = require('../Db/db')

const getAll=(req,res)=>{
connection.query('select * from users',(err,data)=>{
    if(err){
        console.log(err)
        res.status(400).json({ error: "Something went wrong!" })
    }
    res.status(200).json({data})
    
});
  
}


const getAllData=(req,res)=>{

    // connection.query('select * from admin',(err,data)=>{
    //     if(err){
    //         console.log(err)
    //         res.status(400).json({ error: "Something went wrong!" })
    //     }
    res.send('hello')
        
    // });
      
    }

module.exports={
    getAll:getAll,
    getAllData:getAllData
}