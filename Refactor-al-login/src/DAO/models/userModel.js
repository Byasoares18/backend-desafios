import mongoose from 'mongoose';

const collectionName='users';

const userSchema=new mongoose.Schema({
    name:{type: String, required:true},
    last_name:{type: String, required:true},
    email:{type: String, required:true, unique:true},
    age:{type:Number, required:true},
    password:{type: String, required:true},
    role:{type:String,  default:'user', enum:['user', 'admin']}
})

export const userModel=mongoose.model(collectionName, userSchema)