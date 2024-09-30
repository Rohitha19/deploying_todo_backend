const Task = require('../models/Task');

// Get all tasks
exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching tasks' });
  }
};

// Create a new task
exports.createTask = async (req, res) => {
  try {
    const { title, description } = req.body;
    const newTask = new Task({ title, description });
    await newTask.save();
    res.json(newTask);
  } catch (err) {
    res.status(400).json({ error: 'Error creating task' });
  }
};

// Update task
exports.updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, status, timeSpent } = req.body;
    const updatedTask = await Task.findByIdAndUpdate(id, { title, description, status, timeSpent }, { new: true });
    res.json(updatedTask);
  } catch (err) {
    res.status(400).json({ error: 'Error updating task' });
  }
};

// Delete task
exports.deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    await Task.findByIdAndDelete(id);
    res.json({ message: 'Task deleted' });
  } catch (err) {
    res.status(400).json({ error: 'Error deleting task' });
  }
};

// Update task timer
exports.updateTaskTimer = async (req, res) => {
  try {
    const { id } = req.params;
    const { timeSpent } = req.body;
    const updatedTask = await Task.findByIdAndUpdate(id, { timeSpent }, { new: true });
    res.json(updatedTask);
  } catch (err) {
    res.status(400).json({ error: 'Error updating timer' });
  }
};
