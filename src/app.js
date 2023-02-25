const express = require("express");
const cors = require("cors");


const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

const userRouter = require("./route/user");
const recipeRouter = require("./route/recipe");

app.use("/",userRouter);
app.use("/",recipeRouter);





app.use("*",(req,res)=>{
    res.sendStatus(404);
})
module.exports = app;