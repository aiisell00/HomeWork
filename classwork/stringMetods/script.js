/** @format */
//* Hem 4 hem de 5e bolunen ededleri tap
// let nums = [14, 20, 35, 40, 57, 60, 100];
// let cem = 0;
// function bolunenler(array) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] % 20 === 0) {
//       cem += array[i];
//     }
//   }
//   return cem;
// }
// console.log(bolunenler(nums));

//* eynilikleri tap
// let cumle = prompt("Cümle daxil edin:");
// let simvol = prompt("Simvol daxil edin:");
// let count = 0;
// function Count(sent, char) {
//   for (let i = 0; i < sent.length; i++) {
//     if (sent[i] === char) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(Count(cumle, simvol));
// *
// let numbers=[23,341,4000,9,99,817,0]

// function Check(array) {
//     let count=''
//     for (let i = 0; i < array.length; i++) {
//       count
//     }
//     return count
// }
// console.log(Check(numbers))

// * en uzun sozu tap
let cumle = "salam men gedirem Yardimliya ";
let max = "";
function Check(cumle) {
  let soz = cumle.split(" ");
  for (let i = 0; i < soz.length; i++) {
    if (soz[i].length > max.length) {
      max = soz[i];
    }
  }
  return max;
}
console.log(Check(cumle));
