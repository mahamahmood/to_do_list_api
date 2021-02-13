/* Dependencies */
require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const mongoose = require("mongoose");
const path = require("path");// to walk through the file path

/* Database */
// Mongoose connection
const MONGODB_URI = process.env.MONGODB_URI;
const db = mongoose.connection;

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
db.on("open", () => {
    console.log("Mongo is Connected");
});

/* Middleware */
app.use(express.json());

/* Controllers */
// Cxn Test 
app.get('/', (req, res)=>{
    res.send('Back is connected')
});



/* Listener */
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});