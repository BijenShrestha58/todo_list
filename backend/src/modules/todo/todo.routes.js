const express = require("express");
const todoController = require("./todo.controller");
const todoRoutes = express.Router();

todoRoutes.get("", todoController.getAllTodo);
todoRoutes.get("/:id", todoController.getById);
todoRoutes.get("/status/:status", todoController.getByStatus);
todoRoutes.post("", todoController.createTodo);
todoRoutes.put("/:id", todoController.updateTodo);
todoRoutes.delete("/:id", todoController.deleteTodo);

module.exports = todoRoutes;
