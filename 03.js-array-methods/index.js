let arr = [
    {
      name: "test",
      key: 1,
    },
    {
      name: "task",
      key: 2,
    },
    {
      name: "tanqo",
      key: 3,
    },
    {
      name: "like",
      key: 4,
    },
    {
      name: "task",
      key: 5,
    },
    {
      name: "trust",
      key: 6,
    },
    {
      name: "test",
      key: 7,
    },
    {
      name: "last",
      key: 8,
    },
    {
      name: "tanqo",
      key: 9,
    },
    {
      name: "elephant",
      key: 10,
    },
    {
      name: "love",
      key: 11,
    },
    {
      name: "small",
      key: 12,
    },
    {
      name: "little",
      key: 13,
    },
];
// 1) "name"-i "t" herfi ile bashlayan obyektleri yeni arraya yigin (filter)
console.log(arr.filter((p) => p.name.startsWith('t')))
// 2) "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin sayini tapin (forEach)
let count=0;
let two=arr.filter((p) => {
  if(p.name.startsWith('t') && p.name.endsWith('t')){
    count ++
  }
})
console.log(count)
// 3) "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin "key"- lerinin cemini tapin
let nameT = arr.filter((p) => p.name.startsWith('t') && p.name.endsWith('t'))
console.log(nameT.reduce((p, item) => p + item.key, 0))
// 4) "name"-i "e" herfi ile biten obyeklerdeki name-in deyerini "SuperDev" sozu ile evezleyin.
arr.forEach((p)=>{
  if(p.name.endsWith('e')){
    p.name='SuperDev'
  }
})
console.log(arr)
// 7)  "name"-i en uzun olan obyektin indexin kvadratini hesablayin

// 8) "name"-inin uzunlugu 4 olan obyektlerden ibaret yeni array yaradin. (filter)
console.log(arr.filter((p)=>p.name.length===4))
// 10) keylərin cəmini tapın
console.log(arr.reduce((p, item)=>p+item.key,0))
// 11) terkibinde ən az 2 't' herfi olan obyekt(ler)i tapın.
console.log(arr.filter((p)=>p.name.includes('t')))
// 12) key'leri 10'dan boyuk ve "name"-i 'l' herfi ile bashlayan obyektleri tapaq
console.log(arr.filter((p)=>p.name.startsWith('l') && p.key>10))