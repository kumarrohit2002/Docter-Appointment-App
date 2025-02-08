const express=require('express');
const router=express.Router();
const authMiddleware=require('../middleware/AuthMiddleware');

const {registerUser,loginUser,getUserById}=require('../controllers/authController');

router.post('/register',registerUser);
router.post('/login',loginUser);
router.get('/get_user_data',authMiddleware,getUserById);


module.exports=router;