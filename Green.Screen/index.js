const input = document.querySelector("#bgColor")
const button = document.querySelector("input")[1];

button.addEventListener("click", function() {
    
    document.body.style.backgroundColor = input.innerHTML 
})

