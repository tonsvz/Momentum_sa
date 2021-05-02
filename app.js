// TweenMax.to(".reveal", 2.1, {
//   width: "40%",
//   opacity: 1,
//   scaleX: 1,
//   ease: Expo.easeInOut,
// });

// TweenMax.to(".text", 0.3, {
//   delay: 1.5,
//   opacity: 1,
//   scaleY: 1,
//   ease: Circ.Out,
// });

TweenMax.to(".left", 1, {
  delay: 0.8,
  width: "50%",
  ease: Power2.easeInOut,
});

TweenMax.to(".right", 1, {
  delay: 0.6,
  width: "50%",
  ease: Power3.easeInOut,
});

TweenMax.from("nav", 1, {
  delay: 0.6,
  opacity: 0,
  ease: Expo.easeInOut,
});

TweenMax.from(".text h1", 2, {
  delay: 0.6,
  x: 90,
  opacity: -0.1,
  ease: Power2.easeInOut,
});

TweenMax.from(".text p", 1.5, {
  delay: 1,
  opacity: 0,
  ease: Power3.easeInOut,
});

TweenMax.staggerFrom(
  ".bottomNav ul li",
  1,
  {
    delay: 1,
    x: 100,
    opacity: -1,
    ease: Circ.easeInOut,
  },
  0.08
);

TweenMax.from(".info", 1, {
  delay: 1.5,
  y: 0,
  opacity: 0,
  ease: Circ.easeInOut,
});

TweenMax.from(".name", 1, {
  delay: 1.5,
  x: -500,
  opacity: -1.5,
  ease: Circ.easeInOut,
});
TweenMax.to(".momentum", 1, {
  delay: 1.5,
  width: "1000px",
  ease: Power2.easeInOut,
});
