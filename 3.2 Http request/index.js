import express from "express";
const app=express();
const port =3000;
app.get("/",(req,res)=>{
    res.send("<h1>Hello world</h1>");
    console.log(req.rawHeaders);
});
app.get("/contact",(req,res)=>{
    res.send("contact through mail");
});
app.get("/about",(req,res)=>{
    res.send("this is about page");
})
app.listen(port, ()=>{
    console.log(`server is running on port ${port}`)
});