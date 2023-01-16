function upChristmas() {
	let countDownDate = new Date("Dec 25, 2023").getTime() + 24 * 60 * 60 *1000;
	let now = new Date().getTime();
		
	let timeLeft = countDownDate - now;	
	let daysLeft = Math.floor(timeLeft / (1000*60*60*24));
	document.getElementById("falta").innerHTML = daysLeft;
}

function updateYear() {
	let now = new Date();
	let theYear = now.getFullYear();
	document.getElementById("ye").innerHTML = theYear;
}

function createEventListener() {
	upChristmas();
	updateYear();
}

window.addEventListener("load", createEventListener, false);