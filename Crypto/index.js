import express from "express"; 
import axios from "axios"; //import express and axios to use express and to get data from api

const port =3000; //declared port number
const app=express(); //call function for express is stored in this variable

app.use(express.static("public")); //This line used to use static files

app.get("/",(req,res)=>{
    res.render("index.ejs")
});

app.listen(port,()=>{
    console.log(`sever listing in port ${port}`); //log msg in console
}); //function to listen in port server