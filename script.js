const submitBtn = document.getElementById("submit-btn");
const audioPlayer = document.getElementById("audio-player");

submitBtn.addEventListener("click", function(event) {
  event.preventDefault();
  audioPlayer.play();
});
