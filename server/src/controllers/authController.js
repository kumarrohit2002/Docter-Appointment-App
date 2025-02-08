const userModel=require('../models/User.model');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken')

exports.registerUser=(async(req,res)=>{
    try{
        const existingUser = await userModel.findOne({email:req.body.email});
        if(existingUser){
            return res.status(200).json({success:false,message:"User Already exists"});
        }
        let password = req.body.password;
        password=await bcrypt.hash(password,10);
        req.body.password=password;
        const newUser=new userModel(req.body);
        await newUser.save();
        
        res.status(200).json({message:'User Register Successfully',success:true});
        return;
    }catch(err){
        console.log(err);
        res.status(500).json({success:false,message: err.message});
        return;
    }
})

exports.loginUser=(async(req,res)=>{
    try{
        const {password,email} = req.body;
        if(!password || !email){
            return res.status(401).json({success:false,message:"All field are Required!!"});
        }
        const user = await userModel.findOne({email:req.body.email});
        if(!user){
            return res.status(200).json({success:false,message:"User does not exist"});
        }
        const userPassword=user.password;
        const isMatch=await bcrypt.compare(password,userPassword);
        if(!isMatch){
            return res.status(200).json({success:false,message:"Password Incorrect"});
        }

        const token=jwt.sign({id:user.id},process.env.JWT_SIGN,{expiresIn:"1d"});
        
        return res.status(200).json({success:true,message:"Login successful",token:token});
    }catch(err){
        console.log(err);
        return res.status(500).json({success:false,message:err.message});
    }
})


exports.getUserById=(async(req,res)=>{
    try{
        const userId=req.body.userId;
        const user = await userModel.findById(userId);

        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        user.password=null;

        return res.status(200).json({
            success: true,
            message: "User data retrieved successfully!",
            user:user
        });
    }catch(err){
        console.log(err.message);
        res.status(500).json({success:false,message:err.message})
    }
})