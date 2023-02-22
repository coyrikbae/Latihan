const LoginView = require('../views/LoginView.js');

class LoginController {
    static help() {
        //
        LoginView.help();
    }
    static login(params) { 
        // console.log(params);
        LoginView.login(params);
    }
    static daftar() {
        //
        LoginView.daftar();
    }
    static list() {
        //
        LoginView.list();
    }
    static default() { 
        //
        LoginView.default();
    }
}

module.exports = LoginController;