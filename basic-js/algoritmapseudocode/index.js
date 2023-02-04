/**
 * A. Hitung luas segitiga
 * ALGORITMA
 * 1. Rumus luas segitiga 0.5 * alas * tinggi
 * 2. Buat variabel alas
 * 3. Buat variabel tinggi
 * 4. Buat variabel luas
 * 5. Isi variabel luas dengan rumus 0.5 kali alas kali tinggi
 * 6. Hitung luas segitigating
 * 7. Cetak luas segitiga
 * 
 * PSEUDOCODE
 * STORE alas WITH ANY Number
 * STORE tinggi WITH ANY Number
 * STORE luas WITH 0.5 MULTIPLY alas MULTIPLY tinggi
 * DISPLAY luas
 * 
 */
// console.log("Hello World!");

// let alas = 5;
// let tinggi = 3;
// let xx = 0.5;
// let hasilA = xx * alas * tinggi;
// console.log("LUAS SEGITIGA " + hasilA);

/**
 * B. Hitung luas lingkaran
 * ALGORITMA
 * Rumus luas lingkaran = 3.14*r*r
 * 
 * PSEUDOCODE
 * DISPLAY hasil luas lingkaran
 * 
 */
// var jari = 15;
// var jari2 = 15;
// var hasilB = 22/7 * jari * jari2;
// var text1 = "LUAS LINGKARAN = ";
// console.log(text1, hasilB);

/**
 * C. Tentukan luas permukaan tabung
 * ALGORITMA
 * Rumus luas permukaan tabung = 2*3.14*r*(r+t)
 * 
 * PSEUDOCODE
 * DISPLAY hasil luas permukaan tabung
 *
 */
// var aa = 2;
// var p = 22 / 7;
// var j1 = 12;
// var j2 = 12;
// var t = 22;
// var hasilC = aa * p * j1 * (j2 + t);
// console.log("LUAS PERMUKAAN TABUNG = " + hasilC);

/**
 * OPERATOR LOGIC
 * Operator Modulus %
 * Operator Not !
 * Operator Equals ==
 * Operator Or ||
 * Operator >
 * Operator <
 * Operator >=
 * Operator <=
 */
// var hari = 100;
// var seminggu = 7;
// var hasilModulus = hari % seminggu;
// console.log("MODULUS OPERATOR = " + hasilModulus);

// var a = 9;
// var b = "9";
// var c = 4;

// var hasilNot = a !== b;
// console.log("NOT OPERATOR = " + hasilNot);

// untuk mengecek tipe data dan value(nilai) dari variable menggunakan " === "
// var hasilEqual = a === b;
// console.log("EQUAL OPERATOR = " + hasilEqual);

// var umur = 17;
// var umur1 = 15;
// var tinggiBadan = 160;
// var tinggiBadan1 = 150;

// if (tinggiBadan >= 160 && umur >= 17) { 
//     console.log("DAPAT TIKET");
// } else {
//     console.log("TIDAK DAPAT TIKET");
// }

// if (tinggiBadan1 >= 160 && umur1 >= 17) { 
//     console.log("DAPAT TIKET");
// } else {
//     console.log("TIDAK DAPAT TIKET");
// }

/**
 * A. Cek bilangan genap ganjil 
 * 
 */
// var x = 5;
// var y = 10;
// if (y % 2 == 0) {
//     console.log("GENAP");
// } else {
//     console.log("GANJIL");
// }

/**
 * B. Cek score nilai
 * 
 * Garde A : score antara 100 - 85
 * Grade B : score antara 84 - 70
 * Grade C : score antara 69 - 55
 * Grade D : score antara 54 - 40
 * Grade E : score antara 39 - 0
 * 
 */
// var scoreA = 54.5;

// if (scoreA >= 85) {
//     console.log("A");
// } else if (scoreA >= 70) {
//     console.log("B");
// } else if (scoreA >= 55) {
//     console.log("C");
// } else if (scoreA >= 54) {
//     console.log("D");
// } else {
//     console.log("E");
// }

/**
 * Study Case 2
 * 
 * 1. Promo code "Discount10%":
 * - jika beli di atas atau sama dengan 500000, maka discount 10%
 * - jika beli di antara 300.000 sd 500.000, maka discount 5%
 * - jika beli di bawah 300.000, maka discount 2.5%
 * 
 * 2. Promo code "DiscountHarbolnas":
 * - jika beli di atas atau sama dengan 250.000, maka discount 15%
 * - jika beli di bawah 250.000, maka discount 0%
 * 
 */

// var promoA = "Discount10%";
// var promoB = "DiscountHarbolnas";

// var beli = 249990;
// var kuponA = promoB;

// if (kuponA == promoA && beli >= 500000) {
//     console.log("discount10%, kembalian= Rp." + beli*0.9)
// } else if (kuponA == promoA && beli >= 300000) {
//     console.log("discount5%, kembalian= Rp." + beli*0.05);
// } else if (kuponA == promoA && beli >= 10000) {
//     console.log("discount2.5%, kembalian= Rp." + beli*0.025);
// } else if (kuponA == promoB && beli >= 250000) {
//     console.log("discount15%, kembalian= Rp." + beli*0.15);
// } else if (kuponA == promoB && beli < 250000) {
//     console.log("discount0%, kembalian= 0");
// } else {
//     console.log("discount0%");
// }

// Rumus volume tabung = p * r^2 * t
var p = 3.14;
var r = 2;
var t = 4;
var volume = p * (r*r) * t;
console.log("Volume tabung = " + volume);
