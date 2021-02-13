const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const TodoSchema = new Schema(
    {
        task: { type: String, required: true },
        status: Boolean
    }, 
    { timestamps: true }
);

// Create Model from our Schema
const Todo = mongoose.model("Todo", TodoSchema);

// Expert Todo Model
module.exports = Todo;