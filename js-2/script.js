/** @format */
//! sehife acilanda alert gelir codlar dogru yazildiqda success olmadiqda ise
// let code = prompt("kodu yaz");
// let newCode = prompt("kodu yeniden yaz");

// if (code == "") {
//   alert("bosh olmaz");
// } else {
//   if (code == newCode) {
//     alert("Əla");
//   } else if ((code = !newCode)) {
//     prompt("dogrusunu yaz");
//   } else {
//     alert("Yox");
//   }
// }

//! pul meyvenin kqi
// let pul = prompt("pulu yaz");
// let kq = prompt("kq yaz");
// let kqQiymet = pul / kq;

// if (pul == "") {
//   alert("Pul getir");
// } else {
//   if (kqQiymet <= 2) {
//     alert(`Alma ${kqQiymet} `);
//   } else if (kqQiymet <= 4) {
//     alert(`Armud ${kqQiymet} `);
//   } else if (kqQiymet <= 6) {
//     alert(`banan ${kqQiymet} `);
//   } else {
//     alert("Bu qiymete meyve yoxdu");
//   }
// }

//! aylar
let fesil= prompt("Fesil:")
if (fesil == "") {
  alert("Fesil yaz");
} else {
  if (fesil=="mart" && fesil=="aprel" && fesil=="may") {
    alert(` fesil: Yaz `);
  } 
  else if(fesil=="iyun" && fesil=="iyul" && fesil=="avqust") {
    alert(` fesil: yay `);
  }else if (fesil=="sentyabr" && fesil=="oktyabr" && fesil=="noyabr") {
    alert(` felil: payiz `);
  }else if (fesil=="dekabr" && fesil=="yanvar" && fesil=="fevral") {
    alert(` felil: qis `);
  }
  
  else  {
    alert("Bu qiymete meyve yoxdu");
  }
}
