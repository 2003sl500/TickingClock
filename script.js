setInterval(function () {
	const d = new Date();
	var seconds = d.getSeconds() * 6 + 180;
	var minutes = d.getMinutes() * 6 + 180;
	var hours = d.getHours() * 30 + 180;
	var hourPartial = hours / 8;

	console.log(hours);

	document.getElementById("seconds").style.transform =
		"rotate(" + seconds + "deg)";

	document.getElementById("minutes").style.transform =
		"rotate(" + minutes + "deg)";

	document.getElementById("hour").style.transform =
		"rotate(" + hourPartial + "deg)";
}, 1000);
