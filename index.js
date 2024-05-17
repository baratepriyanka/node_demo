const express= require('express');
const app=express();
const port = 8089;

const login=require('./Routes/login')

app.use('/login',login)

app.get('/', ( req,res)=>{
    res.send('hello')
})



app.listen(port, () => {
  console.log(`Server listening on port ${port}`);  
});