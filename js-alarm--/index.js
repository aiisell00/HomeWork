//Input
let h = document.querySelector(".hours-timer input");
let m = document.querySelector(".minutes-timer input");
let s = document.querySelector("seconds.-timer input");
//Timer
let hour = document.querySelector(".hours-alarm h1");
let min = document.querySelector(".minutes-alarm h1");
let sec = document.querySelector(".seconds-alarm h1");

//Validation

function value(a, b, c) {
  if (a > b && a < c) true;
  else false;
}

//Start Btn
let error = document.querySelector(".error");
let button = document.querySelector("button");

button.addEventListener("click", (e) => {
  if (h.value === "") h.value = "0";
  if (m.value === "") m.value = "0";
  if (s.value === "") s.value = "0";
  e.preventDefault();
  if (
    !h.value.match(/[0-2][0-4]?/) ||
    !m.value.match(/[0-5][0-9]?/) ||
    !s.value.match(/[0-5][0-9]?/)
  ) {
    error.classList.replace("error","err-active");
  } else {
    button.setAttribute("disabled", "");
    error.classList.replace("err-active","error");

    let seconds =
      Number(h.value) * 60 * 60 + Number(m.value) * 60 + Number(s.value);
    if (String(parseInt(seconds / 60 / 60)).length == 1)
      hour.textContent = "0" + parseInt(seconds / 60 / 60);
    else hour.textContent = parseInt(seconds / 60 / 60);
    if (String(parseInt((seconds / 60) % 60)).length == 1)
      min.textContent = "0" + parseInt((seconds / 60) % 60);
    else min.textContent = parseInt((seconds / 60) % 60);
    if (String(parseInt(seconds % 60)).length == 1)
      sec.textContent = "0" + parseInt(seconds % 60);
    else sec.textContent = parseInt(seconds % 60);

    h.value = "00";
    s.value = "00";
    m.value = "00";

    let timeLoop = setInterval(() => {
      seconds -= 1;
      if (String(parseInt(seconds / 60 / 60)).length == 1)
        hour.textContent = "0" + parseInt(seconds / 60 / 60);
      else hour.textContent = parseInt(seconds / 60 / 60);
      if (String(parseInt((seconds / 60) % 60)).length == 1)
        min.textContent = "0" + parseInt((seconds / 60) % 60);
      else min.textContent = parseInt((seconds / 60) % 60);
      if (String(parseInt(seconds % 60)).length == 1)
        sec.textContent = "0" + parseInt(seconds % 60);
      else sec.textContent = parseInt(seconds % 60);
      if (
        hour.textContent == "00" &&
        sec.textContent == "00" &&
        min.textContent == "00"
      ) {
        clearInterval(timeLoop);
        document.querySelector(".alert").classList.add("active");
        playAudio();
      }
    }, 1000);
  }
});
document.querySelector(".alarm").addEventListener("click", () => {
  document.querySelector(".alert").classList.remove("active");
  button.removeAttribute("disabled");
  pauseAudio() ;
  h.value = "";
  s.value = "";
  m.value = "";
});
var x = document.getElementById("myAudio"); 

function playAudio() { 
  x.play(); 
} 

function pauseAudio() { 
  x.pause(); 
} 