// /** @format */

// let bar = document.querySelector(".bar");
// let xBtn = document.querySelector(".x-btn");
// let none = document.querySelector(".none");
// console.log(xBtn)
// xBtn.addEventListener("click" ,function () {
//     none.style.display="none"
// })

let minus=document.querySelector(".minus")
let count=document.querySelector(".count")

let plus=document.querySelector(".plus")

plus.addEventListener("click", function () {
    let total=0;
    Number(count.innerText)++
})