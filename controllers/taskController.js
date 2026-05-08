const Task=require('../models/Task')

exports.createTask=(req,res)=>{
    const {title,description}=req.body;
    const task = new Task({
        userID:req.user.id,
        title:title,
        description:description
    })
    task.save()
        .then((result)=>res.status(201).json(result))
        .catch((err)=>res.status(400).json(err))
}

exports.getAllTasks=async(req,res)=>{
    const tasks = await Task.find();
    res.status(200).json(tasks)
}

exports.getTaskById=async(req,res)=>{
    try{
    const {id}=req.params;
    const task = await Task.findById(id);
    if(task){
        res.status(200).json(task)
    }else{
        return res.status(404).json({message:'Task not found!'})
    }
    }catch(err){
        res.status(400).json({message:err.message})
    }
}

exports.updateTask=async(req,res)=>{
    try{
    const {id}=req.params;
    const{title,description}=req.body;

    const task=await Task.findById(id);

    if(!task){
        return res.status(404).json({message:'Task not found!'})
    }
    task.title=title || task.title;
    task.description=description || task.description
    const updatedTask=await task.save();
        res.status(200).json(updatedTask)
    }catch(err){
        res.status(400).json({message:err.message})
    }
}

exports.deleteTask=async(req,res)=>{
    try{
    const {id}=req.params;
    const tasks = await Task.findByIdAndDelete(id);
    if(tasks){
        res.status(200).json({message:'Task deleted'})
    }else{
        return res.status(404).json({message:'Task not found!'})
    }
    }catch(err){
        res.status(400).json({message:err.message})
    }
}
