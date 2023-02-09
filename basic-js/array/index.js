/* Array Latihan */

// let score = [1, 2, 3, 4, 5];
// /* Cara menampilkan value array score dalam array */
// for (let i = 0; i < score.length; i++){
//     console.log(score[i]);
// }

// /* Cara menampilkan value array score dalam string */
// /* Pertama value array score di masukan kedalam pembungkus(temp) ber value/nilai string */
// let temp = "";
// for (let i = 0; i < score.length; i++){
//     temp += score[i];
// }
// console.log(temp);
// /* Cara melihat value/nilai pada pembungkus(temp) */
// console.log(typeof(temp));
// /* Convert value menjadi number cara ES5 */
// console.log(typeof Number(temp));

// /* Cara menjumlahkan value array score */
// /* Pertama value array score di masukan kedalam pembungkus(temp1) ber value/nilai number */
// let temp1 = 0;
// for (let i = 0; i < score.length; i++){
//     temp1 += score[i];
// }
// console.log(temp1);
// /* Cara melihat value/nilai pada pembungkus(temp) */
// console.log(typeof(temp1));

// /* Contoh array dua dimensi */
// let mhs = [
//     ["joko", 3.0, "kebon jeruk"],
//     ["andi", 3.5, "kelapa dua"],
//     ["susi", 2.0, "kembangan"]
// ]
// /* Menampilkan value array pada baris ke 0 kolum ke 2*/
// console.log(mhs[0][2]);
// /* Menampilkan seluruh value array mhs*/
// console.log(mhs);

// /* Mencari nilai Mean atau Rata-Rata (Average) */
// let stats = [1.7, 0.2, 5.1, 7.3, 3.5];
// /* Pertama menampung array stats ke dalam pembungkus(total) ber value number */
// let total = 0;
// /* Cara menjumlahkan nilai array stats ke dalam pembungkus(total) ber value number */
// for (let i = 0; i < stats.length; i++) {
//     total += stats[i];
// }
// let mean = total / stats.length;
// /* Cara membulatkan angka di belakang koma .tofixed() */
// console.log("Mean: " + mean.toFixed(2));
// /* Cara melihat type value */
// console.log(typeof mean);
// console.log("Hasil value array stats di jumlahkan: " + total);
// /* Cara melihat jumlah nilai array stats */
// console.log(stats.length);

// /* Cara menampilkan value array stats */
// for (let i = 0; i < stats.length; i++) {
//     console.log(i+1 + '.', stats[i]);
// }