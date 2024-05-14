"use strict"
const string="Hello World"
console.log(string)
let result=""
result=string.charAt(1)
result=string.charAt(string.length-1)
result=string.charCodeAt(2)
result=string.codePointAt(4)
result=string.concat(" salam")
result=string.endsWith("ld") //*neyle bitdiyini true folse qaytarir
// result=string.fromCharCode()
result=string.includes(" ") 
result=string.indexOf("h")
result=string.lastIndexOf("l")
// result=string.length
result=string.localeCompare("p")
console.log("o".localeCompare["l"]) //herflerin hansinin ilk oldugunu yoxlayiriq
result=string.padEnd(20,"**")
// result=string.padStart()
result=string.repeat(4,"     ")
result=string.replace("World", "Shahnaz")
result=string.replaceAll("l", "g")
result=string.slice(0,5)
result=string.slice(6)
// result=string.slice(-3,-6)
result=string.split("")
result=string.startsWith("He")
result=string.substring(2,5)
result=string.toLocaleLowerCase()
result=string.toLocaleUpperCase()
result=string.trim()
console.log(result)
