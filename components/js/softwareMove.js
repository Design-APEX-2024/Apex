/* ~~~~~~~~~~~~~~~~~~~  SOFTWARE MOVE CIRCULAR  ~~~~~~~~~~~~~~~~~~~~~ */
function autoMove() {
  document.querySelectorAll(".object").forEach(function (move, index) {
    var moving_value = move.getAttribute("data-value") || 1;
    var angle = (Date.now() / 4000) * (index + 1);
    var x = Math.cos(angle) * 20 * moving_value;
    var y = Math.sin(angle) * 20 * moving_value;
    move.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });

  /* ~~~~~~~~~~~~~~~~~~~  PARTICLE DUST MOVE CIRCULAR  ~~~~~~~~~~~~~~~~~~~~~ */
  document.querySelectorAll(".object1").forEach(function (move, index) {
    var moving_value = move.getAttribute("data-value") || 1;
    var angle = (Date.now() / 3000) * (index + 1);
    var x = Math.cos(angle) * 20 * moving_value;
    var y = Math.sin(angle) * 20 * moving_value;

    move.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });

  /* ~~~~~~~~~~~~~~~~~~~  SOFTWARE MOVE UP DOWN  ~~~~~~~~~~~~~~~~~~~~~ */
  document.querySelectorAll(".object2").forEach(function (move, index) {
    var moving_value = move.getAttribute("data-value") || 1;
    var time = Date.now() / 6000;
    var amplitude = 50 * moving_value;
    var frequency = 0.5 * (index + 1);
    var x = 0;
    var y = amplitude * Math.sin(frequency * time);
    move.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
}
setInterval(autoMove, 50);
