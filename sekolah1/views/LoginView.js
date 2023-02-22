const Login = require('../models/Login.js');

class LoginView {
    static help() {
        //
        console.log('command list:');
        console.log('node index.js help');
        console.log('node index.js login');
        console.log('node index.js daftar');
    }
    static login(params) { 
        // console.log(params);
        Login.enterLogin(params);
    }
    static daftar() { 
        //
    }
    static list() { 
        //
        Login.display();
    }
    static default() {
        //
        console.log("Please enter the correct command, trims.");
        console.log("Type command like this:");
        console.log("node index.js help");
    }
}

module.exports = LoginView;