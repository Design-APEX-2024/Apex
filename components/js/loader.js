document.addEventListener("DOMContentLoaded", () => {
  const totalDuration = 3; // Duration for the SVG animation
  const textDelay = 1; // Delay before showing the text after SVG animation
  const svgAnimationDuration = totalDuration * 1000; // Convert to milliseconds

  // GSAP animation for the SVG drawing
  gsap.fromTo(
    "#svg",
    { strokeDashoffset: 4500 },
    {
      strokeDashoffset: 0,
      duration: totalDuration,
      ease: "ease-in-out",
      onComplete: showText // Show text after SVG animation is complete
    }
  );

  function showText() {
    // GSAP animation for the text after the SVG is drawn
    gsap.fromTo(
      ".logo-name",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: .8,
        delay: textDelay,
        onComplete: showWebsite // Show website after text animation is complete
      }
    );
  }

  function showWebsite() {
    // GSAP animation for hiding the loading screen and showing the website
    gsap.fromTo(
      ".loading-page",
      { opacity: 1 },
      {
        opacity: 0,
        display: "none",
        duration: 1.5,
        onComplete: () => {
          const preloader = document.querySelector("#loader");
          const body = document.querySelector("body");

          preloader.style.display = "none";
          body.style.overflow = "visible";
        }
      }
    );
  }
});
