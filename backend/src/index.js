const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const todoRoutes = require('./modules/todo/todo.routes');
const app = express();
const router = express.Router();
const todoController = require('./modules/todo/todo.controller')
const axios = require('axios')
const cors = require('cors');
const userRoutes = require('./modules/user/user.routes');
app.listen(8081, () => {
    console.log(`API is listening on port 8081`);
});

app.use(cors({
    origin: '*'
}));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/todo',todoRoutes)
app.use('/user',userRoutes)


mongoose.connect("mongodb+srv://Bijen:admin12345@cluster0.xcnreh9.mongodb.net/");
const database = mongoose.connection;
database.on('error', (error) => {
    console.log(error)
});
// router.get('/todo', todoController.getAllTodo);
// router.post('/todo', todoController.createTodo);
// router.put('/todo/:id', todoController.updateTodo);
// router.delete('/todo/:id', todoController.deleteTodo);

database.once('connected', () => {
    console.log('Database Connected');
});

app.use("/", router);
