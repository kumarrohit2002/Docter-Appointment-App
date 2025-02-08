const jwt=require('jsonwebtoken');

module.exports=(req,res,next)=>{
    try{
        const token=req.headers['authorization'].split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWT_SIGN);
        req.body.userId=decoded.id;
        next();
    }catch(err){
        console.log('User not Authorized');
        return res.status(500).json({success:false,message: err.message});
    }
}