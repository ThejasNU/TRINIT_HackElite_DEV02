require("dotenv").config();

const app=require("express")();


app.listen(process.env.PORT,()=>{
    console.log("Server has started;")
})