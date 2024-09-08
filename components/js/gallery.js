// Select the gallery div
const gallery = document.querySelector(".gallery");

gallery.addEventListener("mousemove", function (details) {
  document.querySelectorAll(".carousel-item").forEach((elem) => {
    var x = (window.innerWidth - details.clientX * 15) / 50;
    
    elem.style.transform = `translateX(${-x}px)`;
  });
});
