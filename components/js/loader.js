// loader.js
import { startCameraAnimation } from './softwareRevolve.js'; // Import the function to start the camera animation

document.addEventListener("DOMContentLoaded", () => {
  const totalDuration = 2; // Duration for the SVG animation
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
      onComplete: showText, // Show text after SVG animation is complete
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
        duration: 0.4,
        delay: textDelay,
        onComplete: showWebsite, // Show website after text animation is complete
      }
    );
  }

  function showWebsite() {
    gsap.fromTo(
      ".loader",
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

          const nextPage = document.querySelector('.nextPage');
          const landingPage = document.querySelector('.landingPage');

          if (nextPage) {
            nextPage.style.opacity = 1;
            console.log('nextPage opacity set');
          } else {
            console.log('nextPage element not found');
          }

          if (landingPage) {
            landingPage.style.opacity = 1;
            console.log('landingPage opacity set');
          } else {
            console.log('landingPage element not found');
          }

          // Start the camera animation after the loader is hidden
          startCameraAnimation();
        },
      }
    );
  }
});
