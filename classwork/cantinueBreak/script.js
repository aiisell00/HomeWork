/** @format */

let user = [
  {
    id: 1,
    name: "Shahnaz",
    age: 20,
  },
  {
    id: 2,
    name: "Semed",
    age: 40,
  },
  {
    id: 3,
    name: "Vusala",
    age: 35,
  },
  {
    id: 4,
    name: "Gulcin",
    age: 10,
  },
];
function Chek(array) {
  console.log(`30dan boyuk olanlar`);
  for (let i = 0; i < array.length; i++) {
    if (array[i].age > 30) {
      console.log(`    username: ${array[i].name}, age:${array[i].age}`);
      continue;
    }
  }
}
function Name(array) {
  console.log(`30dan kicik olanlar`);

  for (let i = 0; i < array.length; i++) {
    if (array[i].age < 30) {
      console.log(`    username: ${array[i].name}, age:${array[i].age}`);

      continue;
    }
  }
}
function log(a) {
  console.log(Chek(a), Name(a));
}

// log(user);
let cutlerinCemi = 0;
let teklerinCemi = 0;
for (let i = 1; i <= 500; i++) {
  if (i % 2 === 0) {
    cutlerinCemi += i;
  } else if (i % 2 !== 0) {
    teklerinCemi += i;
  }
}

console.log(`Cut ededlerin cemi ${cutlerinCemi}
Tek ededlerin cemi ${teklerinCemi}
Ferqi ${cutlerinCemi - teklerinCemi}`);
if (cutlerinCemi - teklerinCemi > 0) {
  console.log("Musbetdir");
}if(teklerinCemi-cutlerinCemi<0){
    console.log("Menfidir")
}
