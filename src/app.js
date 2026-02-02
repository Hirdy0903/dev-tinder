const express=require('express');
const app=express();
app.use("/hey",(req,res)=>{
    res.send('Hey from the server!');
})
app.use("/",(req,res)=>{
    res.send('first page');
})
app.use("/test",(req,res)=>{
    res.send('Hello from the server!');
})

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});