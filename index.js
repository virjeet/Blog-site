import bodyParser from "body-parser";
import express from "express";



const app=express();
app.use(bodyParser.urlencoded({extended:true}))
const port=3000;
app.use(express.static('public'));

app.get("/",(req,res)=>{
    res.render("index.ejs");
})

app.get("/blog",(req,res)=>{
    res.render("myblog.ejs");
})

app.post("/submit",(req,res)=>{
    const user=req.body["email"];
    const pass=req.body["pass"];
    // console.log(user+" "+pass);
    if(user=="virjeet17@gmail.com"){
        if(pass=="virjeet"){
            res.render("submit.ejs");
        }
        else{
            res.send("Password is incorrect!!!!");
        }
        
    }
    else{
        res.send("Username is incorrect!!!");
    }
})

app.get("/about",(req,res)=>{
    res.render("aboutus.ejs")
})

app.get("/contact",(req,res)=>{
    res.render("contact.ejs");
})

app.listen(port,()=>{
    console.log("server is running...")
})