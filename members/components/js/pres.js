var textWrapper = document.querySelector(".pres-title");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='pres-letter'>$&</span>"
);

anime.timeline().add({
  targets: ".pres-title .pres-letter",
  translateY: [100, 0],
  translateZ: 0,
  opacity: [0, 1],
  easing: "easeOutExpo",
  duration: 2000,
  delay: (el, i) => 4800 + 40 * i,
});

TweenMax.to(".pres-box", 2.4, {
  y: "-100%",
  ease: Expo.easeInOut,
  delay: 1,
});

TweenMax.from(".pres-img img", 4, {
  scale: "2",
  ease: Expo.easeInOut,
  delay: 0,
});

TweenMax.to(".pres-wrapper-img", 2.4, {
  width: "400",
  height: "500",
  ease: Expo.easeInOut,
  delay: 3.6,
});

TweenMax.from(".pres-img", 0.4, {
  opacity: 0,
  ease: Expo.easeInOut,
  delay: 3.4,
});

TweenMax.to(".pres-left", 2, {
  x: "-400",
  rotation: -10,
  ease: Expo.easeInOut,
  delay: 3.8,
});

TweenMax.to(".pres-right", 2, {
  x: "100",
  rotation: 10,
  ease: Expo.easeInOut,
  delay: 3.8,
});

TweenMax.staggerFrom(
  ".pres-menu > div, .pres-hero-container > div",
  2,
  {
    opacity: 0,
    y: 30,
    ease: Expo.easeInOut,
    delay: 4.2,
  },
  0.1
);
