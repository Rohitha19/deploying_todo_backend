const express = require('express');
const taskController = require('../controllers/taskController');
const router = express.Router();

router.get('/tasks', taskController.getAllTasks);
router.post('/tasks', taskController.createTask);
router.put('/tasks/:id', taskController.updateTask);
router.delete('/tasks/:id', taskController.deleteTask);
router.put('/tasks/:id/timer', taskController.updateTaskTimer);

module.exports = router;
