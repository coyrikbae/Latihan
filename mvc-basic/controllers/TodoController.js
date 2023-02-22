const TodoView = require('../views/TodoViews');
// const Todo = require('../views/Todo');

class TodoController {
    static help() {
        //
        TodoView.help();
    }
    static list() {
        //
        // const todos = Todo.getTodos();
        TodoView.list();
    }
    static add(params) {
        // console.log(params);
        TodoView.add(params);
    }
    static delete(params) {
        //
        TodoView.delete(params);
    }
    static update(params) {
        //
        TodoView.update(params);
    }
    static default() {
        //
        TodoView.default();
    }
}

module.exports = TodoController;