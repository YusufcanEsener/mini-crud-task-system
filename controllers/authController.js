const User=require('../models/User')
const jwt = require('jsonwebtoken');

const createToken=(id) => {
    return jwt.sign({id}, process.env.JWT_SECRET,{expiresIn:process.env.MAX_AGE})
}

exports.postRegister = (req, res) => {
    const {username,password}=req.body
    const user = new User({
        username:username,
        password:password
    })
    user.save()
        .then((result)=>{res.status(201).json(result);})
        .catch((err)=>{console.log(err)
        res.status(400).json({error:err.message})   
        })
}
exports.postLogin = async(req, res, next) => {
    const {username,password}=req.body;

    try{
        const user = await User.login(username,password)
        const token= createToken(user._id)
        res.cookie('jwt',token,{httpOnly:true,maxAge:process.env.MAX_AGE*1000})
        res.status(200).json({token:token})
    }catch(e){
        console.log(e)
        res.status(400).json({error:e.message})
    }
}

exports.postLogout=async(req,res)=>{
    res.clearCookie('jwt');
    res.status(200).json({message:'Çıkış başarılı'})
}