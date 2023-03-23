let colorInput = document.getElementById("bgColor").innerHTML
const button = document.querySelector("button")

button.addEventListener("click", function() {
    let color = colorInput
    document.body.style.backgroundColor = color
})