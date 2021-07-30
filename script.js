setInterval(function () {
	const d = new Date();

	var seconds = d.getSeconds() * 6 + 180;
	// six degrees of rotation for every 1 sec or minute
	var minutes = d.getMinutes() * 6 + 180;
	var hours = d.getHours() * 30 + 180;
	// 30 degrees of rotation for every 1 hour movement
	var hourPartial = (d.getMinutes() / 60) * 30 + hours;
	// minutes / 60 (gives fraction of time passed)
	// 30 is the degrees between one hour and the next hour
	// add the above to the hours degree rotation to get the full functionality

	console.log(
		"Time: " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds()
	);

	document.getElementById("seconds").style.transform =
		"rotate(" + seconds + "deg)";

	document.getElementById("minutes").style.transform =
		"rotate(" + minutes + "deg)";

	document.getElementById("hour").style.transform =
		"rotate(" + hourPartial + "deg)";
}, 1000);
