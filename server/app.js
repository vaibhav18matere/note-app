const express = require('express');


const app = express()
require('./database/config').connect()
const Task = require('./model/task');
app.listen(5000, () => {
    console.log("listening to port")
})

app.post('/', (req, res) => {
    const data = req.body;
    const newTask = new Task(data)
})