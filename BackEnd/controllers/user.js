const DbModel = require("../models/user");


exports.createUser  = async(req,res) =>{
    try{
        const userData = await new DbModel(req.body).save();
        res.json(userData);
    }catch(err){
        return(res.json(err));
    }
}


exports.getAllUser = async(req,res) =>{
    try{
        const userInfo = DbModel.find();
        return(res.json(userInfo));
    }catch(err){
        return(res.json(err));
    }
}


exports.getUser = async(req,res) =>{
    try{
        const getUser = DbModel.find({__id:req.params.userID});
        return(res.json(getUser));
    }catch(err){
        return(res.json(err));
    }
}

exports.updateUser = async(req,res) =>{
    try{
        await DbModel.findByIdAndUpdate({__id:req.params.userID},req.body,{new:true});
    }
    catch(err){
        return(res.status(500).json(err));
    }
}


exports.deleteUser = async(req,res) =>{   
    await DbModel.findOneAndDelete({__id:req.params.userID},(err,data)=>{
        if(err){
            return(res.json(err));
        }else{
            return(res.json(data));
        }
    });
}