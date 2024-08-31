document.addEventListener("DOMContentLoaded", function () {
    const audio = new Audio("../images/sound/loop_2.ogg");
    audio.loop = true;
    audio.play();
  
    const soundDiv = document.querySelector(".sound");
    const soundText = soundDiv.querySelector("h4");
  
    function toggleSound() {
      if (audio.paused) {
        audio.play();
        soundText.textContent = "Sound On";
      } else {
        audio.pause();
        soundText.textContent = "Sound Off";
      }
    }
  
    soundDiv.addEventListener("click", toggleSound);
  });
  