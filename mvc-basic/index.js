const command = process.argv[2];
const params = process.argv.slice(3);

const TodoController = require('./controllers/TodoController');

switch (command) {
    case 'help':
        TodoController.help();
        break;
    case 'list':
        TodoController.list();
        break;
    case 'add':
        TodoController.add(params);
        break;
    case 'delete':
        TodoController.delete(params);
        break;
    case 'update':
        TodoController.update(params);
        break;
    default:
        TodoController.default();
}
