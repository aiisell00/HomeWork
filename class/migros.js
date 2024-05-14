/** @format */

// localStorage.setItem("name", "Shahnaz")
// localStorage.setItem("surname", "Rustemli")
// console.log(localStorage.getItem("name"))
// console.log(localStorage.getItem("surname"))

let api = {
  name: "Shahnaz",
  surname: "Rustemli",
};
localStorage.setItem("api", JSON.stringify(api));
console.log(JSON.parse(localStorage.getItem("api")));
