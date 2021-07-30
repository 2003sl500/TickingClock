// function getSecondsSinceStartOfDay() {
// 	return (
// 		new Date().getSeconds() +
// 		new Date().getMinutes() * 60 +
// 		new Date().getHours() * 3600
// 	);
// }

setInterval(function () {
	const d = new Date();
	var seconds = d.getSeconds() * 6 + 180;
	var minutes = d.getMinutes() * 6 + 180;
	var hours = d.getHours() * 30 + 180;

	console.log(d.getMinutes());
	// console.log(d.getSeconds());
	document.getElementById("seconds").style.transform =
		"rotate(" + seconds + "deg)";

	document.getElementById("minutes").style.transform =
		"rotate(" + minutes + "deg)";

	document.getElementById("hour").style.transform =
		"rotate(" + hours + "deg)";
}, 1000);
