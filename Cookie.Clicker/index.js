// Makes sure that HTML is loaded before firing JS.
addEventListener('DOMContentLoaded', function() {
const count = document.querySelector(".number")
let counter = 0
const image = document.querySelector("#img")

image.addEventListener('click', function() {
	counter++
	count.innerText = counter;	
	})
})
