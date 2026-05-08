const express= require('express')
const router = express.Router()
const taskController=require('../controllers/taskController')

//Post
router.post('/task', taskController.createTask)
//Get
router.get('/tasks', taskController.getAllTasks)
router.get('/tasks/:id', taskController.getTaskById)
//Put
router.put('/tasks/:id', taskController.updateTask)
//Delete
router.delete('/tasks/:id', taskController.deleteTask)

module.exports=router;