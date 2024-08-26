document.addEventListener('DOMContentLoaded', function() {
  const loader = document.getElementById('loader');
  const svgElements = document.querySelectorAll('#loader #svg');
  const logoName = document.querySelector('.logo-name');
  const countingNumber = document.getElementById('counting-number');
  let totalAnimations = svgElements.length;
  let completedAnimations = 0;
  let count = 0;

  // Function to update the loading progress percentage
  function updateProgress(progress) {
    countingNumber.textContent = progress + '%';
    count = progress;
  }

  // Function to simulate loading progress (for demonstration)
  function simulateLoadingProgress() {
    const interval = setInterval(() => {
      if (count < 100) {
        count++;
        updateProgress(count);
      } else {
        clearInterval(interval);
        setTimeout(() => {
          // Fade in the logo name text after loading completes
          logoName.style.opacity = '1';
          setTimeout(() => {
            // Ensure the logo name stays visible for at least 0.5 seconds
            loader.style.opacity = '0';  // Start fading out loader
            setTimeout(() => {
              loader.style.visibility = 'hidden';
              document.body.style.overflow = '';  // Re-enable scrolling (if disabled)
            }, 500);  // Delay to ensure loader visibility hides only after fade out
          }, 500);  // Ensure the logo name stays visible for at least 0.5 seconds
        }, 500);  // Delay to ensure smooth transition after counting animation
      }
    }, 50);  // Adjust the interval time (50ms) to control the speed of the loading simulation
  }

  // Start the loading simulation (this should be replaced by actual loading logic)
  simulateLoadingProgress();

  // Optionally disable scrolling while loader is visible
  document.body.style.overflow = 'hidden';
});
