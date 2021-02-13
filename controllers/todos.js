const express = require("express");
const router = express.Router();
const Todo = require("../models/todo.js");

/* routes */
// Index
router.get('/', (req, res) => {
    // Use Todo Model to get all Todos
    Todo.find({}, (error, allTodos) => {
        error ? 
        res.status(404).json(error) :
        res.status(200).json(allTodos)
    });
});

// Delete
router.delete('/:id', (req, res) => {
    // Delete document from collection
    Todo.findByIdAndRemove(req.params.id, (error, todo) => {
        error ? 
        res.status(404).json(error):
        res.status(200).json(todo)
    });
});

// Update
router.put('/:id', (req, res) => {
    console.log(req.body);
    // Update the Todo document using our model
    Todo.findByIdAndUpdate(req.params.id, req.body, { new: true }, (error, updatedTodo) => {
        error ? 
        res.status(404).json(error):
        res.status(200).json(updatedTodo)
    });
});

// Create
router.post('/', (req, res) => {
    // if (req.body.isCompleted === "on") {
    //     req.body.isCompleted = true;
    // } else {
    //     req.body.isCompleted = false;
    // }
    console.log(req.body);
    // Use Model to create Todo document
    Todo.create(req.body, (error, createdTodo) => {
        error ? 
        res.status(404).json(error) : 
        res.status(200).json(createdTodo)
    });

});

// Show
router.get('/:id', (req, res) => {
    // Find the specific document
    Todo.findById(req.params.id, (error, foundedTodo) => {
        // Render the Show route and pass it the foundedTodo
        error ?
        res.status(404).json(error):
        res.status(200).json(foundedTodo)
    });
});

// Export router
module.exports = router;