const count = document.querySelector(".number")
let counter = 0
const image = document.getElementById("img")
image.addEventListener('click', function() {
	counter++
	count.innerText = counter;	
})
