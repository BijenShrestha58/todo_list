const todoSchema = require('./todo.schema');

const getAllTodo = async (req,res)=>{
    return res.send({
        data: await todoSchema.find({}).populate('user','_id username')
    });
}

const getById = async (req,res)=>{
    return res.send({
        data: await todoSchema.findOne({
            _id: req.params.id
        })
    });
}


const createTodo = async (req,res)=>{
    await todoSchema.create({
        title:req.body.title,
        status:req.body.status,
        user: req.body.user
    });
    res.status(200).send('Todo created')
}

const deleteTodo = async (req, res) => {
    const todoId = req.params.id;
    await todoSchema.findByIdAndDelete(todoId);
    res.status(200).send('Todo deleted');
  };
  
const updateTodo = async (req, res) => {
    const todoId = req.params.id;
    const updatedTodo = {
      title: req.body.title,
      status: req.body.status,
    };
    console.log(todoId)
    await todoSchema.findByIdAndUpdate(todoId, updatedTodo);
    res.status(200).send('Todo updated');
  };

const getByStatus = async (req, res) => {
    const tasks = await todoSchema.find({
        status: req.params.status
    });
    res.status(200).send({data: tasks});
  };


module.exports = {
    getAllTodo,
    getById,
    createTodo,
    deleteTodo,
    updateTodo,
    getByStatus
}