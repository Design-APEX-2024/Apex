let box = document.querySelector('.galleryBox');
let degrees = 0;

// Function to rotate the box
function rotateBox(direction) {
  degrees += direction;
  box.style.transform = `perspective(1000px) rotateY(${degrees}deg)`;
}

// Start automatic rotation every 3 seconds
setInterval(function() {
  rotateBox(-45); // Rotate -45 degrees every 3 seconds
}, 3000);
