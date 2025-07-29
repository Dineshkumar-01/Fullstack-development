import express from "express";

const app=express();
const port=3000;

app.get("/",(req, res)=>{
    const currentDate = new Date();
    let day=currentDate.getDay();
    if(day==0 || day==6){
    res.render("index.ejs",{
        msg: "Hey! Its_weekend, It's time to enjoy",
    });
}else{
    res.render("index.ejs",{
        msg: "Hey Its A weekday, It's time to work hard",
    });
}
});
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
