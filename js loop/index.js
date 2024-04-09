// I. 1 dən 100'ə qədər sadecə cüt ədədləri çapa verin.

// for (let index = 0; index <= 100; index = index + 2) {
//     console.log(index)
// }


// II. number type'lı bir dəyişən daxil edin.
// Verilən rəqəmin tək və ya cüt olduğunu console'a çıxaran proqram tərtib edin.

// let number = parseInt(prompt("bir eded daxil edin"));
//     if (number%2===1) {
//         console.log(`${number} tek ededdir`);
//     } else if (number % 2 === 0) {
//         console.log(`${number} cut ededdir`)
//     }else {
//        console.log(`${number} ne tek, ne de cut`)
//     }


// III. Verilmiş ədədin bütün bölənlərini console'a çıxaran proqram tərtib edin.

// let number=parseInt(prompt("eded daxil edin"));
// for (let i = 0; i <=number; i++) {
//   if (number%i===0) {
//     console.log(i)
//   }
// }


// VI. Düzbucaqlı üçbucağın katetləri və hipotenuzunun uzunluğu verilib.
// Verilən məlumatlara əsəsən bu üçbucağın düzbucaqlı üçbucaq olub olmadığını
// yoxlayan proqram tərtib edin.

// let a = 4;
// let b = 5;
// let c = 3;
// if (a ** 2 + b ** 2 === c ** 2 || a ** 2 + c ** 2 === b ** 2 || b ** 2 + c ** 2 === a ** 2){
//   console.log("Duzbucaqli ucbucaqdir");
// } else {
//   console.log("Duzbucaqli ucbucaq deyil!!");
// }


// V. 3 rəqəmli hər hansı bir ədəd verilib.
// Həmin ədədin hansı rəqəmlərdən ibarət olduğunu bizə qaytaran bir proqram tərtib edin.

// let number = 5326;
// let teklik = number % 10;
// let onluq = ((number % 100) - teklik) / 10;
// let yuzluk = (number - (number % 100)) / 100;

// console.log(`${yuzluk}yuzluk, ${onluq}onluq, ${teklik}teklik`);


// VI. Üçbücağın 3 tərəfi verilib.
// Onların bərabərtərəfli üçbucaq olduğunu təyin edən proqram tərtib edin.

// let a, b, c;
// a =4;
// b =4;
// c = 4;
// if (a===b && (a===c&&b===c)) {
//     console.log(`Beraberterefli ucbucaqdir`)
// } else {
//     console.log(`Beraberterefli ucbucaq deyil`)
// }


// VII. Üçbücağın 3 tərəfi verilib.
// Onların bərabəryanlı üçbucaq olduğunu təyin edən proqram tərtib edin.

// let a = 4;
// let b = 8;
// let c = 7;
// if ((a === b && ((a !== c)&&(b !=c))) || (a === c && ((a !== b)&&(c !=b))) || (b === c && ((b !== a)&&(c !=a)))) {
//   console.log("Beraberyanli ucbucaqdir");
// } else {
//   console.log("Beraberyanli ucbucaq deyil");
// }


// VIII. 3 dəyişən daxil edin.
// Bu ədədlərin üçbucağın tərəfi olub olmadığını yoxlayan proqram tərtib edin.

// let a = parseInt(prompt('ucbucagin birinci terefi'));
// let b = parseInt(prompt('ucbucagin ikinci terefi'));
// let c = parseInt(prompt('ucbucagin ucuncu terefi'));
// if ((a+b>c && a+c>b && b+c>a)&&(a-b<c && a-c<b && b-c<a)) {
//     console.log(true);
// } else if (a===0 && b===0 && c===0) {
//     console.log('0-dan boyuk ededler girin');
// }else {
//     console.log(false);
// }


// IX. Ayın adlarına uyğun olaraq neçə gündən ibarət olduğunu cavablandıran alqoritm tərtib edin.
// Alqoritm  Switch Case  vasitəsi yazılsın.

// let month = "january";
// switch (month) {
//     case "january":
//         console.log(`${ month } have 31 days`);
//         break;
//     case "february":
//         console.log(`${ month } have 28/29 days`);
//         break;
//     case "march":
//         console.log(`${ month } have 31 days`);
//         break;
//     case "april":
//         console.log(`${ month } have 30 days`);
//         break;
//     case "may":
//         console.log(`${ month } have 31 days`);
//         break;
//     case "june":
//         console.log(`${ month } have 30 days`);
//         break;
//     case "july":
//         console.log(`${ month } have 31 days`);
//         break;
//     case "august":
//         console.log(`${ month } have 31 days`);
//         break;
//     case "september":
//         console.log(`${ month } have 30 days`);
//         break;
//     case "octomber":
//         console.log(`${ month } have 31 days`);
//         break;
//     case "november":
//         console.log(`${ month } have 30 days`);
//         break;
//     case "december":
//         console.log(`${ month } have 31 days`);
//         break;

//   default:
//     console.log(`${month} is not valid month`);
//     break;
// }


// X. 3 rəqəmli hər hansı bir ədəd verilib.
// Həmin ədədin rəqəmlərindən ibarət olan max və min ədədlərini tapın.

// let a = 8;
// let b = 9;
// let c = 5;
// let maxNum;
// let minNum;
// if (a > b && a > c) {
//   if (b > c) {
//     maxNum = a * 100 + b * 10 + c;
//     minNum = c * 100 + b * 10 + a;
//   } else {
//     maxNum = a * 100 + c * 10 + b;
//     minNum = b * 100 + c * 10 + a;
//   }
// } else if (b > a && b > c) {
//   if (a > c) {
//     maxNum = b * 100 + a * 10 + c;
//     minNum = c * 100 + a * 10 + b;
//   } else {
//     maxNum = b * 100 + c * 10 + a;
//     minNum = a * 100 + c * 10 + b;
//   }
// } else {
//   if (a > b) {
//     maxNum = c * 100 + a * 10 + b;
//     minNum = b * 100 + a * 10 + c;
//   } else {
//     maxNum = c * 100 + b * 10 + a;
//     minNum = a * 100 + b * 10 + c;
//   }
// }
// console.log("maxNum", maxNum);
// console.log("minNum", minNum);


// XI. Tələbənin daxil etdiyi bala görə A B C D E F qiymətlərindən hansını aldığını müəyyənləşdirrən proqram yazın.
// 90 və yuxarı üçün "A", 80-89 üçün "B", 70-79 üçün "C", 60-69 üçün "D", 59 və daha aşağı qiymətlər üçün "F".
// Daxil edilən rəqəm müsbət, sıfırdan böyük və 100-dən kiçik olmalıdır.

// let scores = [66, 81, 84, 80, 94];
// let value = 0;
// let res = 0;
// let letter = 0;
// for (let i = 0; i < scores.length; i++) {
// // let A = letter > 90;
// // let B = 80 < letter < 89;
// // let C = 70 < letter < 79;
// // let D = 60 < letter < 69;-----------------no solutions------------------------
// // let E = 50 < letter < 59;
// // let F = 40 < letter < 49;
//     value += scores[i];
//     res += scores[i];
//     letter += scores[i];
//     console.log(`${scores[i]}-`);
//     // if (scores[i]>90) {
//     //     console.log(`${scores[i]}-A`);
//     // } else {
        
//     // }
// }
// let average = res / scores.length;
// console.log("AVERAGE: ", average);


// XII. İstifadəçidən 3 dəyər alın bunlardan ikisi rəqəm, biri isə riyazi əməl olsun.
// Riyazi əmələ görə rəqəmlər üzərində əməliyyat aparsın.
// Riyazi əməllər toplama,çıxma,vurma və bölmə olacaq.Bu dörd əməldən başqası daxil edilərsə console "Zəhmət olmasa düzgün əməl daxil edin yazılsın."
// Taskı switch-case ilə yazın.

let a=parseInt(prompt('eded daxil edin'));
let b=parseInt(prompt('eded daxil edin'));
let c=prompt('operator daxil edin');
switch (c) {
  case '+':
    console.log(`${a+b}`);
    break;
    case '-':
      console.log(`${a-b}`);
      break;
      case '*':
        console.log(`${a*b}`);
        break;
        case '/':
          console.log(`${a/b}`);
          break;
  default:
    console.log('duzgun emel daxil edin');
    break;
}