document.addEventListener('DOMContentLoaded', function() {
  const backgroundMusic = new Audio('../components/images/sound/loop_3.ogg');
  
  backgroundMusic.loop = true;
  backgroundMusic.volume = 0.3; 
  
  // play the audio
  backgroundMusic.play().catch(error => {
      console.log('Autoplay prevented: ', error);
  });
});
