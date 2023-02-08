// Array
// let score = [1, 2, 3, 4, 5];
// let temp = "";

// for (let i = 0; i < score.length; i++){
//     console.log(score[i]);
// }

// for (let i = 0; i < score.length; i++){
//     temp += score[i];
// }
// Convert menjadi number cara ES5
// console.log(typeof Number(temp));
// Convert menjadi number cara ES6
// console.log(temp);

// let mhs = [
//     ["joko", 3.0, "kebon jeruk"],
//     ["andi", 3.5, "kelapa dua"],
//     ["susi", 2.0, "kembangan"]
// ]
// console.log(mhs[1][2]);
// console.log(mhs);

let stats = [1.7, 0.2, 5.1, 7.3, 3.5];
let total = 0;

for (let i = 0; i < stats.length; i++) {
    total += stats[i];
}
let mean = total / stats.length;
// cara membulatkan angka di belakang koma .tofixed()
console.log("Mean: " + mean.toFixed(2));
console.log(mean.length);
console.log(typeof mean);

for (let i = 0; i < stats.length; i++) {
    console.log(i+1 + '.', stats[i]);
}