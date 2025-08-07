
import axios from "axios";
import express from "express";

const port= 3000;
const app=express();

app.use(express.static("public"));
app.get("/",async (req,res)=>{
    const response =await axios.get("https://secrets-api.appbrewery.com/random");
    const data=response.data;
    console.log(data);
    // const data =JSON.stringify(secret.data);
    res.render("index.ejs",{secret:data.secret,user:data.username});
});
app.listen(port,()=>{
    console.log("server is lisiting");
})