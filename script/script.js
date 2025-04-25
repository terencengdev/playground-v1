document.addEventListener("DOMContentLoaded", () => {
  const text = new SplitType("#main_heading");
  const video = document.getElementById("videoTest");
  gsap.registerPlugin(ScrollTrigger);

  gsap.set("#main_heading", { autoAlpha: 1 });
  gsap.set(text.chars, { yPercent: 100 });

  const textAnimate = gsap.to(text.chars, {
    yPercent: 0,
    duration: 1,
    ease: "sine.out",
    stagger: { from: "left", amount: 0.5 },
  });

  let tl1 = gsap.timeline({
    scrollTrigger: {
      trigger: ".hero-section",
      start: "top top",
      end: "bottom",
      pin: true,
      scrub: 3,
    },
  });

  let tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".video-section",
      start: "top",
      end: "bottom",
      pin: true,
      scrub: 3,
    },
  });

  tl1
    .to(".hero-top .description", {
      opacity: 0,
    })
    .to(".logo", {
      scale: 0.5,
      y: 1,
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

  tl2.to(video, { currentTime: 20 });
});
