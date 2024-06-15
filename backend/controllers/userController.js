const asyncHandler=require("express-async-handler");
const User=require("../models/user.Model")
const {hash,compare}=require('bcrypt')
const dotenv=require("dotenv").config();
const jwt=require('jsonwebtoken')
const Travel=require('../models/Travelhistory.Model')
const createUser=asyncHandler(async(req,res)=>{
    const {username, email,password}=req.body;
    
    if(!username||!email||!password){
        res.status(400).send(
            {
                success:false,
                message:"All fields are mandatory"
            }
        );
        
    }
    
    const code=await hash(password,10)
    
    let user=new User({
        email : email,
        username : username,
        name : '',
        password : code,  
        state : '',
        pincode : '',
        gender : '',
        birthday : '',
        address : '',
        travellers : [],
        number : '',
        image: ''
    
})
    const nuser=await user.save()
    const payload={
        username:username,
        id:nuser._id
       }
    
       const token = jwt.sign(payload,process.env.Secret,{expiresIn:"12h"})
       return res.status(200).send({
        success:true,
        message:"Logged in Succesfully",
        token:"Bearer "+token
    })
});
const checkUser=asyncHandler(async(req,res)=>{
       const {username,password}=req.body
       const user=await User.findOne({username:username})
       if(!user){
        return res.status(400).send({
            success:false,
            message:"User not found"
        })
       }
       ans=await compare(password,user.password)
       if(!ans){
            return res.status(401).send({
                success:false,
                message:"Incorrect Password"
            })
       }
       const payload={
        username:user.username,
        id:user._id
       }
       const token = jwt.sign(payload,process.env.Secret,{expiresIn:"12h"})
       return res.status(200).send({
        success:true,
        message:"Logged in Succesfully",
        token:"Bearer "+token
    })
})

const upUser=asyncHandler(async(req,res)=>{
    const {usermail,name,number,pincode,address,state,travellers,gender,birthday}=req.body
    const user=await User.findOne({email:usermail})
    console.log(Array.isArray(travellers))
    user.travellers=travellers
    console.log(travellers)
    user.name=name;
    user.number=number;
    user.pincode=pincode;
    user.address=address;
    user.state=state;
    user.gender=gender;
    user.birthday=birthday;
    const done=await user.save()
    if(done){
        return res.status(200).send({success:true})
    }

})
const gettraveller=asyncHandler(async(req,res)=>{
    const {usermail}=req.body
    const user=await User.findOne({email:usermail})
    const travellers=user.travellers
    
       return res.status(200).send({success:true,
            travellers:travellers
        })
   

})
const upPass=asyncHandler(async(req,res)=>{
   const {username,oldpass,newpass}=req.body
   const user=await User.findOne({username:username})
   ans=await compare(oldpass,user.password)
       if(!ans){
            return res.status(401).send({
                success:false,
                message:"Incorrect Password"
            })
       }else{
        const pass=await hash(newpass,10)
        console.log(newpass)
        user.password=pass
        user.save()
        return res.status(200).send({
        success:true
       })}
})
 const imgup=asyncHandler(async(req,res)=>{
        const {username,image}=req.body
        const user=await User.findOne({username:username})
        user.image=image
        
        const pass= await user.save()
        console.log(pass)
        if(pass){
            res.status(200).send({success:true})
        }
 })
 const getTravel=asyncHandler(async(req,res)=>{
    const {username}=req.body
    const all=await Travel.find({username:username})
    return res.status(200).send(all)
 })
module.exports={createUser,getTravel,checkUser,upUser,upPass,gettraveller,imgup}