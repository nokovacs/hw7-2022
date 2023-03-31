var video;

// Page load
window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video = document.querySelector('.video');
	video.autoplay = false;
	console.log("Autoplay is set to false");
	video.loop = false;
	console.log("Loop is set to false");
});

// Play button
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	document.querySelector("#volume").innerHTML = video.volume * 100 + '%';
    video.play();
});

// Pause button
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
    video.pause();
});

// Speed up
document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow down video");
    video.playbackRate *= 0.9;
	console.log("Speed is " + video.playbackRate);
});

// Skip ahead
document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed up Video");
    video.playbackRate /= 0.9;
	console.log("Speed is " + video.playbackRate);
});

// Mute
document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip ahead");
    if (video.currentTime + 10 > video.duration) {
		video.currentTime = 0;
	} 
	else {
		video.currentTime += 10;
	}
	console.log("Video current time is " + video.currentTime);
});


document.querySelector("#mute").addEventListener("click", function() {
	video.muted = !video.muted;
    if (video.muted){
		console.log("Mute");
		document.querySelector('#mute').innerHTML="Unmute";
	}
	else {
		console.log("Unmute");
		document.querySelector('#mute').innerHTML="Mute";
	}
});

document.querySelector("#slider").addEventListener("click", function() {
	video.volume = document.getElementById("slider").value/100;
	document.querySelector("#volume").innerHTML = video.volume * 100 + '%';
	console.log("The current value is " + video.volume);
});

document.querySelector("#vintage").addEventListener("click", function(){
	video.classList.add("oldSchool");
}
)

document.querySelector("#orig").addEventListener("click", function(){
	video.classList.remove("oldSchool");
}
)
