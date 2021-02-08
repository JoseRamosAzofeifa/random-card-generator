let pintas = ["\u2660","\u2663","\u2665","\u2666"]
let cartas = ["1","2","3","4","5","6","7","8","9","10","J","Q","K"]

let randomNumberPinta = Math.floor(Math.random()*pintas.length)
let randomNumberCarta = Math.floor(Math.random()*cartas.length)

let randomPinta = pintas[randomNumberPinta];
let randomCarta = cartas[randomNumberCarta];

let top1= document.querySelector(".top-suit");
top1.innerHTML=randomPinta

let number = document.querySelector(".number");
number.innerHTML=randomCarta

let bottom= document.querySelector(".bottom-suit");
bottom.innerHTML=randomPinta

if(randomPinta==="\u2665" || randomPinta=== "\u2666") {
top1.style.color ="red"
bottom.style.color ="red"
}

console.log(randomPinta)
console.log(randomNumberCarta)