const addition = document.querySelector('.addition')
const substract = document.querySelector('.substract')
const multiply = document.querySelector('.multiply')
const division = document.querySelector('.division')
const first = document.querySelector('.first')
const second = document.querySelector('.second')
const result = document.querySelector('.result')
const reset = document.querySelector('.reset')
const zero = document.querySelector('.zero')


addition.addEventListener('click', function () {
    let sum = +first.value + +second.value
    result.textContent = sum
})
substract.addEventListener('click', function () {
    let minus = +first.value - +second.value
    result.textContent = minus
})
multiply.addEventListener('click', function () {
    let hasil = +first.value * +second.value
    result.textContent = hasil
})
division.addEventListener('click', function () {
    let bolme = +first.value / +second.value
    result.textContent = bolme
})
reset.addEventListener('click', function () {
    first.value=''
    second.value=''
    result.textContent='0'
}) 