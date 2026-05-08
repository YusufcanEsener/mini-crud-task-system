const jwt=require('jsonwebtoken')
const User = require('../models/User')

const requireAuth=(req,res,next)=>{
    const token=req.cookies.jwt
    if (token){
        jwt.verify(token,process.env.JWT_SECRET,(err,decodedToken)=>{
        if(err){
            return res.status(401).json({message:'Authentication failed'})
        }else{
            console.log(decodedToken)
            req.user=decodedToken;
            next();
        }})
    }else{
       return res.status(401).json({message:'Access denied'})
    }
}

const checkUser=(req,res,next)=>{
    const token=req.cookies.jwt
    if (token){
        jwt.verify(token,process.env.JWT_SECRET,async(err,decodedToken)=>{
        if(err){
            res.locals.user=null;
            return next();
        }else{
            console.log(decodedToken)
            let user=await User.findById(decodedToken.id)
            res.locals.user=user;
            next();
        }})
    }else{
       res.locals.user=null;
       return next()
    }
}

module.exports={requireAuth,checkUser}