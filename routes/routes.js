const express= require('express')
const router= express.Router();

router.get("/",(req,res)=>{
    res.render("index", { 
      title: "Home Page"        
    });
})
router.get("/add",(req,res)=>{        
    //parameter as :  file name and title pe jo show karna vo name 
    res.render("add_users", {title :    "User Page"})
})
// router.get("/contact",(req,res)=>{
//     res.send("Welcome to contact page ")
// })

module.exports= router; 