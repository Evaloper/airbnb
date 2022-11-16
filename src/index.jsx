document.getElementById('nav_btn').addEventListener("click", function() {
	document.querySelector('.popup_div').style.display = "flex";
});

document.querySelector('#close').addEventListener("click", function() {
	document.querySelector('.popup_div').style.display = "none";
});