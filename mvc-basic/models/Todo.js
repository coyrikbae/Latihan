const fs = require('fs');

class Todo {
    constructor(id, task, status, created_at, completed_at) {
        this.id = id;
        this.task = task;
        this.status = status;
        this.created_at = created_at;
        this.completed_at = completed_at;
    }
    static getTodos() {
        //
        let todos = JSON.parse(fs.readFileSync('./data.json', 'utf8'));
        todos = todos.map((todo) => {
            const {id, task, status, created_at, completed_at} = todo;
            return new Todo(id, task, status, new Date(created_at), completed_at);
        });
        return todos;
    }
    static add(params) {
        // 
        const todos = this.getTodos();
        // console.log(todos);
        const [task] = params;
        if (todos == 0) {
            const id = 1;
            todos.push(new Todo(id, task, false, new Date(), null));
            console.log(`${task} has been added to todos.`);
        } else {
            const id = todos[todos.length - 1].id + 1;
            todos.push(new Todo(id, task, false, new Date(), null));
            console.log(`${task} has been added to todos.`);
        }
        this.save(todos);
        console.log(todos);
    }
    static delete(id) {
        //
        // console.log(id);
        // mengubah string ke number
        // console.log(Number(id));
        const di = Number(id);
        let todos = this.getTodos();
        todos = todos.filter((todo) => todo.id !== di);
        console.log(`id ${id} has been deleted from todos.`);
        this.save(todos);
    }
    static update(params) {
        //
        // console.log(params);
        let todos = this.getTodos();
        const [ id, task, status, completed_at ] = params;
        // console.log(id, task, status);
        todos = todos.map((todo) => {
            if (todo.id == id) {
                todo.task = task;
                todo.status = !todo.status;
                todo.completed_at = new Date();
                console.log(todos);
                this.save(todos);
            }
        });
    }
    static save(todos) {
        //
        const todoString = JSON.stringify(todos, null, 3);
        fs.writeFileSync("./data.json", todoString);
    }
    static display() {
        const todos = this.getTodos();
        console.log(todos);
    }
}

module.exports = Todo;