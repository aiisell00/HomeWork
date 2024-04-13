// LOOPS

// // // 1. Verilmiş 3 rəqəmli ədədin rəqəmlərinin cəmini, hasilini və ədədi ortasını tapan proqram tərtib edin.
// // let a = parseInt(prompt('3reqemli eded daxil edin'))
// let a = 345;
// let sum = 0;
// let hasil = 0;
// let eorta = 0;
// let teklik = a % 10;
// let onluq = ((a % 100) - teklik) / 10;
// let yuzluk = (a - (a % 100)) / 100;
// for (let i = 0; i < a; i++) {
//     sum = yuzluk + onluq + teklik;
//     hasil = yuzluk * onluq * teklik;
//     eorta = (yuzluk + onluq + teklik) / 3;
// }
// console.log(sum);
// console.log(hasil);
// console.log(eorta);

// // // 2. Verilmiş ədədin bütün bölənlərini console'a çıxaran proqram tərtib edin.
// let a = parseInt(prompt('eded daxil edin'));
// for (let i = 0; i <=a; i++) {
//   if (a%i===0) {
//     console.log(i)
//   }
// }

// // // 3. Verilmiş ədədin bölənlərinin sayını tapan proqram tərtib edin.
// let a = parseInt(prompt('eded daxil edin'));
// let count = 0;
// for (let i = 1; i <= a; i++) {
//     if (a%i===0) {
//         count ++ ;
//     }
// }
// console.log(count);

// // // 4. for loop'undan istifadə edərək aşağıdakı console'da aşağıdakı görüntünü alın
// //  0 x 0 = 0
// //  1 x 1 = 1
// //  2 x 2 = 4
// //  3 x 3 = 9
// //  4 x 4 = 16
// //  5 x 5 = 25
// //  6 x 6 = 36
// //  7 x 7 = 49
// //  8 x 8 = 64
// //  9 x 9 = 81
// //  10 x 10 = 100
// let a = 10;
// for (let i = 0; i <= a; i++) {
//     console.log(`${i}*${i}=${i*i}`);
// }

// 5.  for loop'undan istifadə edərək aşağıdakı console'da aşağıdakı görüntünü alın
// //  i    i^2   i^3
// //  0    0     0
// //  1    1     1
// //  2    4     8
// //  3    9     27
// //  4    16    64
// //  5    25    125
// //  6    36    216
// //  7    49    343
// //  8    64    512
// //  9    81    729
// //  10   100   1000
// let a = 10;
// console.log(`i,i^2,i^3`);
// for (let i = 0; i <= a; i++) {
//     console.log(`${i},${i**2},${i**3}`);
// }

// // // 6.  0 - 100 arası yalnız sadə ədədləri console'da çap edin.
//  --------------------------no result-------------------------------

// // // 7. 0 - 100 arası tək ədədlərin və cüt ədədlərin cəmini tapın.
// let tek = 0;
// let cut = 0;
// for (let i = 0; i <= 100; i++) {
//     if (i%2===0) {
//         cut += i;
//     }
// }
// console.log(cut)
// for (let i = 0; i < 100; i++) {
//     if (i%2!=0) {
//         tek += i;
//     }
// }
// console.log(tek)

// ------------------------------------------------------------------------------------------------------
// ARRAYS

// 1. studentlərin ortalama score'nu yeni bir arrayda yığın.
// let students = [
//   { name: "Ali", scores: [90, 85, 92] },
//   { name: "Davud", scores: [100, 100, 100] },
//   { name: "Mammal", scores: [75, 80, 85] },
//   { name: "Camil", scores: [90, 95, 85] },
// ];
// let orta = 0;
// for (let i = 0; i < students; i++) {
//   orta += students.scores[i] /students.length -----------------------------------
// }
// console.log(orta)

// // // 2. webTechs arrayında olan elementlərin uzunluğu 4'dən böyük olanları yeni bir arraya yığın.
const webTechs = [
  "HTML",
  "CSS",
  "JS",
  "React",
  "JS",
  "Redux",
  "Node",
  "JS",
  "MongDB",
];
let bigger = [];




