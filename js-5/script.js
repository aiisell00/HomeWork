/** @format */
// let a=[]
// let res = [12, 5, 3, -4, -5, 6, -7, 99];
// for (let i = 0; i < res.length; i++) {
//     if(res[i]<0){
//        a.push(res[i])
//     }

// }
// console.log(a)

// let a=[]

// let res = ["12", 5, 3, -4, -5, 6, -7, "99", NaN, undefined, true,false,null ];
// for (let i = 0; i < res.length; i++) {
//     if(res[i]==res[i]*1 ){
//         if{typeof(res)==="boolean"}
//        a.push(res[i])
//     }
// }
// console.log(a)

// let res = [12, 5, 3, -4, -5, 6, -7, 99];
// let max=res[0]

// for (let i = 0; i < res.length; i++) {
//    if(res[i]>max){
//        max=res[i];
//    }
// }
// console.log(max)

// //! fibonocci ededleri
// let arr = [0, 1];
// let n = 10;
// for (let i = 2; i < n; i++) {
//   arr[i] = arr[i - 2] + arr[i - 1];
// }
// console.log(arr);

// ? en kiciyin indexini tap
let array = [23, 17, 6, 45, 34, 67];
// let min = array[0];
// let index;
// for (let i = 0; i < array.length; i++) {
//   if (min > array[i]) {
//     min = array[i];
//     index = i;
//   }
// }
// console.log("en kicik ededin indexi:", index);

// let sum = 0;

// for (let i = 0; i < array.length; i++) {
//   for (let j = 2; j < array[i]; j++) {
//     if (array[i] % j == 0) {
//       sum += array[i];
//       break
//     }
//   }
// }
// console.log(sum);

let a = "Şahnaz3";
let b="";
for (let i  = a.length-1; i >=0; i--) {
    b+=a[i]
}
console.log(b)