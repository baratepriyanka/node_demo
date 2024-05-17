require('dotenv').config();

const express= require('express');
const app=express();


const login=require('./Routes/login')

app.use('/login',login)

app.get('/', ( req,res)=>{
    res.send('hello')
})

console.log(process.env.PORT)

app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`);  
});