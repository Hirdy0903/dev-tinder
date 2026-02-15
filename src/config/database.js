const mongoose=require('mongoose');
const connectdb=async()=>{
   await  mongoose.connect(
    "mongodb+srv://hirdyanshsaxena7:HIRDY0903@hirdyansh.4gmlqyu.mongodb.net/devTinder"
);
};
module.exports=connectdb; 
