const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt')

const userSchema = new Schema({
    username:{
        type:String,
        required: true,
        unique: true
    },
    password:{
        type:String,
        required:true
    }
})

userSchema.statics.login=async function(username,password){
    const user = await this.findOne({username})

    if(user){
        const auth = await  bcrypt.compare(password,user.password)
        if(auth){
            return user
        }
        else{throw Error('Paralo Hatalı!')}
    }else{throw Error('Kullanıcı Bulunamadı!')}
}

userSchema.pre('save', async function(){
    const salt = await bcrypt.genSalt()
    this.password=await bcrypt.hash(this.password,salt)
})

const User =mongoose.model('User',userSchema)
module.exports= User