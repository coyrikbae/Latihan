const fs = require('fs');

class Login {
    //
    constructor(id, nama, gender, usernama, password, email, created_at, status) { 
        this.id = id;
        this.nama = nama;
        this.gender = gender;
        this.usernama = usernama;
        this.password = password;
        this.email = email;
        this.created_at = created_at;
        this.status = status;
    }
    static getUser() {
        //
        let logins = JSON.parse(fs.readFileSync('./staff.json', 'utf8'));
        logins = logins.map((login) => { 
            const { id, nama, gender, usernama, password, email, created_at, status } = login;
            return new Login(id, nama, gender, usernama, password, email, created_at, status);
        });
        // console.log(logins);
        return logins;
    }
    static enterLogin(params) {
        //
        const [usernama, password] = params;
        // console.log(usernama, password);
        let logins = this.getUser();
        logins = logins.some(employee => {
            if (employee.usernama === usernama && employee.password === password) {
                console.log(`user: ${employee.usernama} - ${employee.status} berhasil login.`);
                return employee;
            } else {
                // console.log('login gagal.');
                return false;
            }
        });
        console.log(logins);
    }
    static display() {
        let logins = this.getUser();
        console.log(logins);
    }
}

module.exports = Login;