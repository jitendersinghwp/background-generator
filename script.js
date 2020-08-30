var body = document.getElementById("main")
var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var button = document.getElementById("randomColor");
var h4 = document.getElementById("gradient");
var letters = '0123456789ABCDEF', color;


function setGradient(){
	body.style.background = "linear-gradient(to right, "
							+ color1.value +", "
							+ color2.value +")";
	h4.textContent = body.style.background + ";";							
}


color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", function(){
	color = '#'
	for(var i = 0; i < 6; i++){
		color+=letters[Math.floor(Math.random() * 16)];
	}
	body.style.background = color;
	return color;
});