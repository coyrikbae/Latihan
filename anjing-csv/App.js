// CSV = Comma Separated value
const { throws } = require("assert");
const fs = require("fs"); // File System
// fs adalah salah satu package/modul dalam node.js

const anjings = {
    kandangs: [],

getAnjing: () => {
    let anjings = fs.readFileSync("./data.csv", "utf8");
    // console.log(anjings);
    // Untuk memisahkan csv menjadi array 2D
    anjings = anjings.split("\n");
    // console.log(anjings);
    anjings = anjings.map((anjing) => {
        return anjing.split(",");
    });
    // console.log(anjings);

    // Mengubah array 2D menjadi array of objects
    let anjingsArr = [];
    let anjingObject = {};
    for (let i = 1; i < anjings.length; i++) {
        const [id, name, breed, characters, owner] = anjings[i];
    // for (let jing in anjings) {
    //         const [id, name, breed, characters, owner] = anjings[jing];
            anjingObject = {
                id: Number(id),
                name,
                breed,
                characters: characters.split("-"),
                owner
            }
            // anjingObjek menampung hasil semua perubahan array menjadi object lalu di masukan kedalam anjingsArray
            anjingsArr.push(anjingObject);
    }
    // console.log(anjingsArr);
    // console.log(anjingObject);
    // anjingArr berisi object lalau ditampung ke kandangs array
    kandangs = anjingsArr;
    // console.log(kandangs);
},

showAnjing: () => { 
    console.log('Tampilkan semua Anjing: ');
    kandangs.forEach((anjing) => {
        const {id, name, breed, owner} = anjing;
        console.log(`${id}. ${name} (${breed}) - mr/mrs. ${owner}`);
    });
},

addAnjing: (...argu) => { 

        const [name, breed, characters, owner] = argu;

        let lastIndex = kandangs.length - 1;
        let id = kandangs[lastIndex].id + 1;

        let sayObj = {
            id,
            name,
            breed,
            characters: characters.split('-'),
            owner
        }
        // console.log(sayObj)
        kandangs.push(sayObj);
        console.log(`Anjing bernama ${name} telah di masukan.`);  
        // console.log(kandangs);
    anjings.saveToCSVJing();
},

saveToCSVJing: () => {
    let hasil1 = [];
    hasil1 = kandangs.map((anjing) => {
        const {id, name, breed, characters, owner} = anjing;
        let tempArr = [id, name, breed, [...characters].join('-'), owner];
        return tempArr.join(',');
    });
    // push masukan data dari depan
    hasil1.unshift('id,name,characters,breed,owner');
    hasil1 = hasil1.join('\n');
    // console.log(hasil1);
    // fs.writeFileSync('./data.csv', hasil1)
},

// deleteAnjing: () => {
//     let hasil2 = [];
//     hasil2 = kandangs.filter((anjing) => {
//         const {id, name, breed, characters, owner} = anjing;
//         let temArr = [id, name, breed, [...characters].join('-'), owner];
//         return temArr.join(',');   
        
//     });
//     hasil2.splice(hasil2, 1);
//     // console.log(hasil2);
//     hasil2 = hasil2.join('\n');
//     // console.log(hasil2);
//     // fs.writeFileSync('./data.csv', hasil2);
// },

cekAnjing: (id) => {
    
    let tes = kandangs.find((anj) => anj.id === id);
        
    console.log(tes);
    tes.join();
    console.log(kandangs[5]);
},

}
anjings.getAnjing();
// anjings.addAnjing("Doom", "Labrador", "macho-smart", "Deco");
// anjings.addAnjing("Bro", "Pitbull", "macho-oon", "Doe john");
// addAnjing("Pret", "Mancoon", "cool-smart", "Karen");
// addAnjing("Croos", "Siam", "playfull-cool", "George");
anjings.cekAnjing(6);
anjings.showAnjing();