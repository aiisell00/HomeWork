let increment= document.getElementById('increment')
let decrement= document.getElementById('decrement')
let number= document.getElementById('number')
let reset= document.getElementById('reset')

let count
count=getDataLocalStorage()
number.textContent=count

increment.addEventListener('click', function () {
  count++
  number.textContent=+count
  setDataLocalStorage()
})
decrement.addEventListener('click', function () {
  count--
  number.textContent= +count
  setDataLocalStorage()
})
reset.addEventListener('click', function () {
  count=0
  number.textContent=count
  setDataLocalStorage()
})
function setDataLocalStorage(counter) {
  localStorage.setItem('counter', JSON.stringify(counter))
}
function getDataLocalStorage() {
  return JSON.parse(localStorage.getItem('counter')) || 0
}