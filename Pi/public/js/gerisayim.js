(function () {
	const second = 1000,
		minute = second * 60,
		hour = minute * 60,
		day = hour * 24;

	let birthday = "Sep 30, 2021 00:00:00",
		countDown = new Date(birthday).getTime(),
		x = setInterval(function () {
			if (document.getElementById("days")) {
				let now = new Date().getTime(),
					distance = countDown - now;
				(document.getElementById("days").innerText = Math.floor(
					distance / day
				)),
					(document.getElementById("hours").innerText = Math.floor(
						(distance % day) / hour
					)),
					(document.getElementById("minutes").innerText = Math.floor(
						(distance % hour) / minute
					)),
					(document.getElementById("seconds").innerText = Math.floor(
						(distance % minute) / second
					));

				//do something later when date is reached
				if (distance < 0) {
					let headline = document.getElementById("headline"),
						countdown = document.getElementById("countdown"),
						content = document.getElementById("content");

					headline.innerText = "It's my birthday!";
					countdown.style.display = "none";
					content.style.display = "block";

					clearInterval(x);
				}
				//seconds
			}
		}, 0);
})();
