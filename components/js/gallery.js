// Select the gallery div
const gallery = document.querySelector(".gallery");

// Get all video elements inside the gallery
const videos = gallery.querySelectorAll('.galleryVideo');

// Create the Intersection Observer to detect when .gallery is in the viewport
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Play all videos when .gallery is in the viewport
      videos.forEach(video => {
        video.play();
      });
    } else {
      // Pause all videos when .gallery is out of the viewport
      videos.forEach(video => {
        video.pause();
      });
    }
  });
}, { threshold: 0.5 }); // 0.5 means the gallery div should be at least 50% visible

// Observe the .gallery div
observer.observe(gallery);
