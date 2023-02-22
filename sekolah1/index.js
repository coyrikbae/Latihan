const command = process.argv[2];
const params = process.argv.slice(3);

const LoginController = require('./controllers/LoginController.js');

switch (command) { 
    case 'help':
        //
        LoginController.help();
        break;
    case 'login':
        //
        LoginController.login(params);
        break;
    case 'daftar':
        //
        LoginController.daftar();
        break;
    case 'list':
        //
        LoginController.list();
        break;
    default:
        //
        LoginController.default();
}
module.exports = command;