const express=require('express');
const router=express.Router();

const authRoute=require('./authRoutes');

router.use('/v1/user',authRoute);


module.exports=router;