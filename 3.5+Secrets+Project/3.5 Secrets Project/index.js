//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";
import bodyParser from "body-parser";

//password
const passkey="dinesh"

const app=express();
const port=3000;

app.use(bodyParser.urlencoded({extended:true}));


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

app.get("/",(req,res)=>{
    res.sendFile("D:/Fullstack course/3.5+Secrets+Project/3.5 Secrets Project/public/index.html");
});
app.post("/check",(req,res)=>{
    if(req.body.password==passkey){
    res.sendFile("D:/Fullstack course/3.5+Secrets+Project/3.5 Secrets Project/public/secret.html");
    }else{
        res.sendFile("D:/Fullstack course/3.5+Secrets+Project/3.5 Secrets Project/public/index.html");
    }
});
