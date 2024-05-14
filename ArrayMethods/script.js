/** @format */
"use strict";
// let fruits = ["Banana", "Orange", "Apple", "Mango"];
// let fruit = [["Banana", "Orange"],[ "Apple", "Mango"]];
// let result = fruits.length;
// result = fruits.toString(); // stringe cevirir
// result = fruits.at(3); //menfi eded qebul etmir edede uygun sheyi yazir
// result = fruits.join("   ");
// // result=fruits.pop() //sonuncunu silir ve sildiyini geri qaytarir
// result = fruits.push(); //sona elave edir
// result = fruits.shift(); //birincini silir
// result = fruits.unshift(); //birinciye elave edir
// // result=delete.age()  //birincini silir
// result = fruits.concat(fruit); //birincini silir
// result = fruits.copyWithin(1,0) //defe,index
// result = fruits.flat() //baxarsan buna
// result = fruits.splice(2, 0,"Armud") //oz arrayine tesir edir ilk index
// // tospliced() bax
// result = fruits.slice(1,2)       //1den bashlayib 2sini silir
// console.log(result);

let students = [
  {
    id: 1,
    name: "Nurane",
    surname: "Ismayilzade",
    age: 21,
    hobbies: ["music", "walking", "watchingfilm"],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
      { id: 3, name: "cavid" },
      { id: 4, name: "alisa" },
    ],
    loginDetail: { username: "nurana21", password: "nunu123" },
    gender: "girl",
    boyfriendGirlfriend: false,
    fail: false,
    avgPoint: 88,
    salaryAZN: 144,
  },
  {
    id: 2,
    name: "Gizilgul",
    surname: "Allahverdiyeva",
    age: 20,
    hobbies: ["book", "writing code"],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
      { id: 3, name: "babaxan" },
      { id: 4, name: "gulshen" },
    ],
    loginDetail: { username: "allahverdieva1", password: "salam123" },
    gender: "girl",
    boyfriendGirlfriend: true,
    fail: false,
    avgPoint: 70,
    salaryAZN: 100,
  },
  {
    id: 3,
    name: "Xanim",
    surname: "Nuriyeva",
    age: 21,
    hobbies: ["book", "music"],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
      { id: 3, name: "hikmet" },
      { id: 4, name: "gulsen" },
    ],
    loginDetail: { username: "xanim123", password: "salamBaku" },
    gender: "girl",
    boyfriendGirlfriend: false,
    fail: false,
    avgPoint: 80,
    salaryAZN: 145,
  },
  {
    id: 4,
    name: "Minaya",
    surname: "Binnetova",
    age: 21,
    hobbies: ["book", "gaming", "movie", "music"],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
      { id: 3, name: "anar" },
    ],
    loginDetail: { username: "binnetova", password: "hello123" },
    gender: "girl",
    boyfriendGirlfriend: false,
    fail: false,
    avgPoint: 90,
    salaryAZN: 142,
  },
  {
    id: 5,
    name: "Sabina",
    surname: "Hatamli",
    age: 21,
    hobbies: ["shopping", "listen to music"],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
      { id: 3, name: "Mirvari" },
    ],
    loginDetail: { username: "sebine123", password: "salam123" },
    gender: "girl",
    boyfriendGirlfriend: true,
    fail: false,
    avgPoint: 81,
    salaryAZN: 146,
  },

  {
    id: 6,
    name: "Ləman",
    surname: "Şamilova",
    age: 20,
    hobbies: [
      "watching movies",
      "reading books",
      "painting",
      " walking",
      " listen to music",
    ],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
    ],
    loginDetail: { username: "lemanshamilova", password: "salamBaku" },
    gender: "girl",
    boyfriendGirlfriend: false,
    fail: false,
    avgPoint: 85.8,
    salaryAZN: 145,
  },
  {
    id: 7,
    name: "Narmin",
    surname: "Musayeva",
    age: 21,
    hobbies: ["book", "gaming", "painting", "walking"],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
      { id: 3, name: "fidan" },
      { id: 4, name: "Irada" },
    ],
    loginDetail: {
      username: "narmin0",
      password: "narmin01",
    },
    gender: "girl",
    boyfriendGirlfriend: false,
    fail: false,
    avgPoint: 80,
    salaryAZN: 196,
  },

  {
    id: 8,
    name: "Fatima",
    surname: "Akhundzada",
    age: 20,
    hobbies: ["drawing", "sleeping"],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
      { id: 3, name: "Valida" },
    ],
    loginDetail: { username: "aynur123", password: "salamBaku" },
    gender: "girl",
    boyfriendGirlfriend: true,
    fail: false,
    avgPoint: 76,
    salaryAZN: 100,
  },
  {
    id: 9,
    name: "Elmir",
    surname: "Huseynov",
    age: 21,
    hobbies: ["book", "ice skating", "Tennis", "Karting"],
    student: true,
    teacher: [
      { id: 1, name: "Gurban" },
      { id: 2, name: "Hajar" },
      { id: 3, name: "Morad" },
      { id: 4, name: "Fikrat" },
    ],
    loginDetail: { username: "huseynovelmirr", password: "maxverstappen" },
    gender: "man",
    boyfriendGirlfriend: false,
    fail: true,
    avgPoint: 76,
    salaryAZN: 120,
  },
  {
    id: 10,
    name: "Fidan",
    surname: "Rehimli",
    age: 21,
    hobbies: ["book", "gaming"],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
      { id: 3, name: "Turan" },
    ],
    loginDetail: { username: "fidan123", password: "fidanrahimli" },
    gender: "girl",
    boyfriendGirlfriend: true,
    fail: true,
    avgPoint: 75,
    salaryAZN: 98,
  },
  {
    id: 11,
    name: "Aynur",
    surname: "Aynurova",
    age: 20,
    hobbies: ["book", "gaming"],
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
    ],
    loginDetail: { username: "aynur123", password: "salamBaku" },
    gender: "girl",
    boyfriendGirlfriend: true,
    fail: true,
    avgPoint: 81,
    salaryAZN: 120,
  },

  {
    id: 12,
    name: "Elman",
    surname: "Muradov",
    age: 20,
    hobbies: [
      "book",
      "gaming",
      "sking",
      "wrestling",
      "swiming",
      "arguing about philosophy",
      "solving sudoku",
      "hiking",
      "walking",
    ],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
      { id: 3, name: "jale" },
      { id: 4, name: "akhmed" },
    ],
    loginDetail: { username: "elman17", password: "elman12345" },
    gender: "girl",
    boyfriendGirlfriend: false,
    fail: true,
    avgPoint: 76,
    salaryAZN: 100,
  },
];
//  const newArr=students.flatMap((elem)=> {elem.hobbies
//   return}
//  );
//  console.log(newArr)
const newArr = students.reduce((acc, elem) => {
  return acc + elem.age;
}, 0);
// console.log(newArr);

const user = {
  name: "Shahnaz",
  age: 20,
  email: "shahnazrtm@gmail.com",
  address: {
    country: "Azerbaijan",
    city: "Baku",
  },
};

function GetUser(user) {
  Object.entries(user).forEach(([key, value]) => {
    if (typeof value === "object") {
      // console.log(key);
      Object.entries(value).forEach(([nestedKey, nestedValue]) => {
        // console.log(`      ${nestedKey} ${nestedValue}`);
      });
    } else {
      // console.log(key, value);
    }
  });
}
GetUser(user);

// function GetNumber(arr, eded) {
//   let count = arr.filter((elem) => elem > eded && elem % eded === 0).length;
//   console.log(count);
// }
// let eded = Number(prompt("Ededi daxil edin"));
// let arr = [12, 3, 34, 4, 5, 6, 67, 8, 98];
// GetNumber(arr, eded);

let array = [];
let min = array[0];
let max = array[0];
function RandomNum(array) {
  for (let i = 0; i < 5; i++) {
    array.push(Math.floor(Math.random() * 10));
  }
  // console.log(array);
  // console.log(`Max              ${Math.max(...array)}`);
  // console.log(`Min              ${Math.min(...array)}`);
}
RandomNum(array);

let Sum = array.reduce((acc, elem) => {
  let sum = acc + elem;
  return sum;
}, 0);
// console.log(`Ededlerin cemi   ${Sum}`);
let overage = Sum / array.length;
// console.log(`Ededi orta       ${overage}`);
let squareArr = array.map((num) => Math.pow(num, 2));
// console.log(`Kvadratlar       ${squareArr}`);

// array iteration methods

let Customers = [
  {
    name: "Shahnaz",
    personal: {
      age: 21,
      hobby: ["uzguculuk", "film", "coding"],
    },
  },
  {
    name: "Gulcin",
    personal: {
      age: 21,
      hobby: ["uzguculuk", "film"],
    },
  },
  {
    name: "Vusala",
    personal: {
      age: 10,
      hobby: ["gezmek", "oynamaq"],
    },
  },
  {
    name: "Shovgu",
    personal: {
      age: 26,
      hobby: ["bekarciliq", "coding"],
    },
  },
];
// butun hobbyleri bir arraye yigir
function getHobby(array) {
  let arr = [];
  array.map((elem) => {
    let a = elem.personal.hobby;
    arr.push(a);
  });
  console.log(arr.flat());
}

getHobby(Customers);

let hour = Math.floor(Math.random()*25);
console.log(hour);

function GetHours(hour) {
  if (hour > 8 && hour < 13) {
    alert("Sabahınız xeyir");
  } else if (hour > 13 && hour < 18) {
    alert("Günortanız xeyir");
  } else {
    alert("Geceniz xeyre");
  }
}

GetHours(hour);



function Check(params) {
  
}
Check(1,2,3,4)