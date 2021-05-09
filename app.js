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
// Function para randomizar el color start
let colorChange = (window.onload = () => {
  const palettesBG = [
    ["#ff5851", "#1b121a", "green"],
    ["#f0db4f", "cyan", "orange"],
    ["#80cee1", "#1b121a", "blue"],
    ["#77dd77", "#1b121a", "blue"],
  ];

  const randomPalette =
    palettesBG[Math.floor(Math.random() * palettesBG.length)];

  let bgColor = randomPalette[0];

  const $left = document.querySelector(".left").style;
  //   //   $right = document.querySelector("#bottomLink1").style;
  //   // $mid = document.querySelector("#bottomLink2").style;
  //   // $center = document.querySelector("#bottomLink3").style;
  //   // $subtext = document.querySelector(".text p").style,
  //   // $navlink1 = document.querySelector("#explore").style,
  //   // $navlink2 = document.querySelector("#search").style;

  $left.backgroundColor = bgColor;
  //   // $right.color = bgColor;
  //   // $mid.color = bgColor;
  //   // $center.color = bgColor;
  //   // $subtext.color = bgColor;
  //   // $navlink1.color = bgColor;
  //   // $navlink2.color = bgColor;
});

colorChange(); //Function Evocation

// Function para randomizar el color end

// Transitiones on load
TweenMax.to(".left", 1, {
  delay: 0.3,
  width: "50%",
  ease: Power2.easeInOut,
});

TweenMax.to(".right", 1, {
  delay: 0.2,
  width: "50%",
  ease: Power3.easeInOut,
});

// TweenMax.from("nav", 1, {
//   opacity: 0,
//   ease: Expo.easeInOut,
// });

// TweenMax.from(".text h1", 2, {
//   delay: 0.6,
//   x: 90,
//   opacity: -0.1,
//   ease: Power2.easeInOut,
// });

// TweenMax.from(".text p", 1.5, {
//   delay: 1,
//   opacity: 0,
//   ease: Power3.easeInOut,
// });

// TweenMax.staggerFrom(
//   ".bottomNav ul li",
//   1,
//   {
//     delay: 1,
//     x: 100,
//     opacity: -1,
//     ease: Circ.easeInOut,
//   },
//   0.08
// );

TweenMax.from(".info", 1, {
  delay: 1.5,
  y: 0,
  opacity: 0,
  ease: Circ.easeInOut,
});

// TweenMax.from(".name", 1, {
//   delay: 1,
//   x: -500,
//   opacity: -1.5,
//   ease: Circ.easeInOut,
// });
TweenMax.to(".momentum", 1, {
  delay: 1.2,
  width: "1000px",
  ease: Power2.easeInOut,
});
// Transitiones on load

// BarbaJS para page transition

function pageTransition() {
  let tl = gsap.timeline();
  tl.to("ul.transition li", {
    duration: 1.2,
    scaleX: 1,
    transformOrigin: "right",
    ease: Expo.easeOut,
    stagger: 0.1,
  }),
    tl.to("ul.transition li", {
      duration: 1.6,
      scaleX: 0,
      transformOrigin: "right ",
      ease: Expo.easeOut,
      stagger: 0.1,
      delay: 0.1,
    });
}

function contentAnimation() {
  let tl = gsap.timeline();
  tl.from(".left", { duration: 1, opacity: 0 }),
    TweenMax.to(".momentum", 1, {
      delay: 1.2,
      width: "1000px",
      ease: Power2.easeInOut,
    });
  TweenMax.to(".left", 1, {
    delay: 0.3,
    width: "50%",
    ease: Power2.easeInOut,
  });

  TweenMax.to(".right", 1, {
    delay: 0.2,
    width: "50%",
    ease: Power3.easeInOut,
  }),
    TweenMax.from("nav", 1, {
      delay: 1.2,
      opacity: 0,
      ease: Expo.easeInOut,
    }),
    TweenMax.from(".text h1", 2, {
      delay: 1,
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
  ),
    TweenMax.from(".name", 1, {
      delay: 1,
      x: -500,
      opacity: -1.5,
      ease: Circ.easeInOut,
    }),
    TweenMax.from(".textPortfolio", 1, {
      x: 90,
      opacity: -0.1,
      ease: Power2.easeInOut,
    }),
    colorChange();

  // tl.to(
  //   "img",
  //   { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" },
  //   "-=1.1"
  // );
}

function delay(n) {
  n = n || 1000;
  return new Promise((done) => {
    setTimeout(() => {
      done();
    }, n);
  });
}

barba.init({
  sync: true,
  transitions: [
    {
      async leave(data) {
        let done = this.async();

        pageTransition();
        await delay(1200);
        done();
      },

      enter(data) {
        contentAnimation();
      },
      once(data) {
        contentAnimation();
      },
    },
  ],
  views: [
    {
      namespace: "portfolio",
      beforeEnter(data) {
        let tag = document.querySelector(".workHeader a ");
        tag.addEventListener("click", (e) => {
          console.log("works");
        });
      },
    },
  ],
});

// const changer = () => {
//   if (window.innerWidth < 400) {
//     document.querySelector("#momName").innerHTML = "HE<br>LLO";
//   } else {
//     console.log("holis");
//   }
// };

// changer();
