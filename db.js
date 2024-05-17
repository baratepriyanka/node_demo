var {Pool}=require('pg');
const poolConnection = new Pool({
    connectionString: process.env.POSTGRES_URL,
  })
  poolConnection.connect((err)=>{
    if(err){
        console.log(err)
        return
    }
    console.log('Databases connected');
})

module.exports=poolConnection