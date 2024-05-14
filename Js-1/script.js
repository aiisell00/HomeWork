//? 1. İstifadəçidən 3 ədəd alın. Bu ədədlərin üçbucağın tərəfi olub olmadığını yoxlayan proqram tərtib edin

let a = 7;
let b = 10;
let c = 8;
if (a + b > c && a + c > b && b + c > a) {
    console.log(` ${a}, ${b}, ${c} terefleri ile üçbucaq olar`);
} else {
    console.log(` ${a}, ${b}, ${c} terefleri ile üçbucaq olmaz`);
}

//* 2. İstifadəçidən 3 ədəd alın. Onların bərabərtərəfli üçbucaq olduğunu təyin edən proqram tərtib edin.
let d = 5;
let e = 2;
let f = 2;
if (d == e == f) {
    console.log(` ${d}, ${e}, ${f} terefleri ile beraberterefli üçbucaq olar`);
} else {
    console.log(` ${d}, ${e}, ${f} terefleri ile beraberterefli üçbucaq olmaz`);
}
//& 3. İstifadəçidən 2 ədəd alın. Hansının ən böyük olduğunu tapan proqram tərtib edin
let num1 = 6;
let num2 = 8;
if (num1 > num2) {
    console.log(` ${num1} ${num2}-den boyukdur`);
} else if (num1 < num2) {
    console.log(` ${num1} ${num2}-den kicikdir`);

} else {
    console.log(` ${num1} ${num2}-e beraberdir`);
}

//! 4. İstifadəçidən 3 ədəd alın. Hansının ən böyük olduğunu tərtib edin.
let num3 = 11;
let num4 = 9;
let num5 = 1;
if (num3 >= num4 >= num5) {
    console.log(`${num3} en botukdur`);
} else if (num4 >= num3 >= num5) {
    console.log(`${num4} en botukdur`);
} else {
    console.log(`${num5} en botukdur`);
}
//~ 5. İstifadəçidən 3 ədəd alın. Onları artan sıra ilə düzən proqram tərtib edin.
// ! and ile yaz
let eded1 = 99;
let eded2 = 12;
let eded3 = 222;
if (eded1 >= eded2 >= eded3) {
    console.log(`${eded1} > ${eded2} > ${eded3}`);
} else if (eded1 >= eded3 >= eded2) {
    console.log(`${eded1} > ${eded3} > ${eded2}`);
} else if (eded2 >= eded1 >= eded3) {
    console.log(`${eded2} > ${eded1} > ${eded3}`);
} else if (eded2 >= eded3 >= eded1) {
    console.log(`${eded2} > ${eded3} > ${eded1}`);
} else if (eded3 >= eded2 >= eded1) {
    console.log(`${eded3} > ${eded2} > ${eded1}`);
} else if (eded3 >= eded1 >= eded2) {
    console.log(`${eded3} > ${eded1} > ${eded2}`);
}

//! 6. Kinoteatra bilet satan proqram yazın. Şərtlər: Bilet qiyməti 10 AZN, yaş 18+ olmalıdır, yaş 18-dirsə minimum 3 bilet almalıdır.

let card = 2;
let age = 17;
if (age >= 18) {
    console.log("Bilet ala bilersiniz");
    if (card === 3) {
        console.log("Halaldı sizə");
    } else {
        console.log("Minimum 3 biletiniz olmalıdır");
    }
} else {
    console.log("Bilet ala bilmezsiniz");
}

//? 7. Bankomat proqramı tərtib edin. 1-düyməsini seçdikdə balans ekranda göstərilsin. 2-düyməsini seçdikdə balansa mədaxil olunsun və balans ekranda göstərilsin,  3-düyməsini seçdikdə balansdan pul çıxarılsın. 4-düyməsini seçdikdə çıxış verilsin.

let button = 2;
let balance = 20;
let added = 10;
let out = 2;
if (button === 1) {
    console.log(`Balance: ${balance}`);
} else if (button === 2) {
    sum = balance + added
    console.log(`Added: ${added}
Balance: ${sum}`);
} else if (button === 3) {
    sum = balance - out;
    console.log(`Out: ${out}
Balance: ${sum}`);
} else if (button===4){
    console.log("Çıxış etdiniz");
}

// sozdeki saytlarin sayi
// let ad="shahonaz"
// for (let i=0; i<ad.length; i++ ){
// let say=0;
//     if(i="a"){
//         say++

//     console.log(say.length)
//     }else if(i="ı"){
//         say++

//     console.log(say.length)
//     }else if(i="o"){
//         say++
//     console.log(say.length)
//     }

//     else if(i="u"){
//         say++
//     console.log(say.length)

//     }
//     else if(i="e"){
//         say++
//     console.log(say.length)
        
//     }
//     else if(i="ə"){
//         say++
//     console.log(say.length)

//     }else if(i="i"){
//         say++
//     console.log(say.length)

//     }else if(i="ö"){
//         say++
//     console.log(say.length)

//     }else if(i="ü"){
//         say++
//     console.log(say.length)

//     }
// }

// // vurma cedveli
// let aa= "12345"
// for