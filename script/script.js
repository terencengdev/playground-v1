document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  let tl1 = gsap.timeline({
    scrollTrigger: {
      trigger: ".hero-section",
      start: "top top",
      end: "3800",
      pin: true,
      scrub: 3,
    },
  });

  tl1
    .to(".hero-top .description", {
      opacity: 0,
    })
    .to(".logo", {
      scale: 1,
      y: 5,
    })
    .fromTo(
      ".hero-image .clip",
      {
        //   scale: 2,

        "--clip": "100%",
      },
      {
        "--clip": "20%",
      }
    )
    .to(".hero-bottom .main-title .left,.hero-bottom .main-title .right", {
      opacity: 1,
      x: 20,
    })
    .fromTo(".hero-bottom .description  ", { opacity: 0 }, { opacity: 1 });

  //   gsap.to(".logo", {
  //     scale: 1,
  //     y: 5,
  //     delay: 2,
  //   });

  //   gsap.to(".hero-section .description", {
  //     opacity: 0,
  //     scrollTrigger: {
  //       trigger: ".hero-section",
  //       start: "top  10%",
  //       pin: "#hero-section .pin-wrap",
  //       scrub: 1,
  //     },
  //   });
});
