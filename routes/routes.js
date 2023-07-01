const express= require('express')
const router= express.Router();

router.get("/",(req,res)=>{
    res.send("Welcome to home page ")
})
router.get("/users",(req,res)=>{
    res.send("Welcome to user page ")
})
router.get("/contact",(req,res)=>{
    res.send("Welcome to contact page ")
})

module.exports= router;