const Todo = require('../models/Todo');

class TodoView{
    static help() {
        console.log("command list: ");
        console.log("node index.js help");
        console.log("node index.js list");
        console.log("node index.js add <task>");
        console.log("node index.js delete <task_id>");
        console.log("node index.js update <task_id> <task>");
    }
    static list() {
        // console.log(todos);
        Todo.display();
    }
    static add(params) {
        // console.log(params);
        Todo.add(params);
    }
    static delete(params) {
        // console.log(params);
        Todo.delete(params);
    }
    static update(params) {
        // console.log(params);
        Todo.update(params);
    }
    static default() {
        console.log("Please enter the correct command, trims.");
        console.log("Type command like this:");
        console.log("node index.js help");
    }
}

module.exports = TodoView;