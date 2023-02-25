require("dotenv").config();
const mongoose = require("mongoose");
const app = require("./src/app");
const port = process.env.PORT;
const dbURL = process.env.DATABASE_URL;

mongoose.set('strictQuery', false);
mongoose.connect(dbURL,(err)=>{
    if(err){
        console.log(err.message);
    }else{
        console.log("connected to DB");
    }
})

app.listen(port,()=>{
    console.log("connected to port "+port);
})