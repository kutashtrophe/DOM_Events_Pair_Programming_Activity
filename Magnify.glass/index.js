const p = document.querySelector("p");

const minimize = document.querySelector("#minimize");
minimize.addEventListener('click', function() {	
	const currentFontSize = parseInt(getComputedStyle(p).fontSize);
	const newFontSize = currentFontSize - 6; 
	p.style.fontSize = newFontSize + "px";
})

const magnify = document.querySelector("#magnify")
magnify.addEventListener('click', function() {	
	const currentFontSize = parseInt(getComputedStyle(p).fontSize);
	const newFontSize = currentFontSize + 6; 
	p.style.fontSize = newFontSize + "px";
})
