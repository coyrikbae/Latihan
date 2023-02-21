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
        // let hasil = Login.enterLogin(params);
        // const [hasil2] = hasil;
        // console.log(hasil2);
        // switch (hasil2) {
        //     case true:
        //         LoginView.list();
        //         break;
        //     default:
        //         false;
        // }
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