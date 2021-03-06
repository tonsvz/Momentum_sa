// --------------------------------------------------

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

// --------------------------------------------------
// Transitiones on load
// TweenMax.to(".left", 1, {
//   delay: 0.3,
//   width: "50%",
//   ease: Power2.easeInOut,
// });

// TweenMax.to(".right", 1, {
//   delay: 0.2,
//   width: "50%",
//   ease: Power3.easeInOut,
// });

// TweenMax.to(".momentum", 1, {
//   delay: 1.2,
//   width: "1000px",
//   ease: Power2.easeInOut,
// });
// Transitiones on load

// BarbaJS Page transition Function

function pageTransition() {
  let tl = gsap.timeline();
  tl.to(".loading-screen", {
    duration: 1.2,
    width: "100%",
    left: "0%",
    ease: Expo.easeInOut,
    stagger: 0.1,
  }),
    tl.to(".loading-screen", {
      duration: 1,
      width: "100%",
      left: "100%",
      ease: Expo.easeInOut,
      delay: 0.3,
    });

  tl.set(".loading-screen", {
    left: "-100%",
  });
}
// BarbaJS Page transition Function
// --------------------------------------------------

// BarbaJS Content animation Function
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
    TweenMax.from("nav ul li a", 1, {
      delay: 1.2,
      opacity: 0,
      ease: Expo.easeInOut,
    }),
    TweenMax.from(".wholeNavigation", 1, {
      delay: 1.2,
      opacity: 0,
      ease: Expo.easeInOut,
    }),
    TweenMax.from(".profile", 1, {
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
    ".bottomLinks a",
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
    TweenMax.from(".info", 1, {
      delay: 1.5,
      y: 0,
      opacity: 0,
      ease: Circ.easeInOut,
    }),
    TweenMax.from(".container-reveal", 1, {
      delay: 1,
      height: "100%",
      ease: Power2.easeInOut,
    });
  TweenMax.from(".container-reveal", 1.5, {
    delay: 2,
    width: "100%",
    ease: Power2.easeInOut,
  });

  TweenMax.from(".work-container h1", 2.45, {
    delay: 1.5,
    y: "-100px",
    opacity: -0.1,
    ease: Power3.easeOut,
  });

  TweenMax.from(".mousey", 2.45, {
    delay: 3.5,
    opacity: -0.1,
    ease: Power3.easeOut,
  });

  // TweenMax.from(".boxReveal", 1, {
  //   delay: 2,
  //   width: "98%",
  //   ease: Power2.easeInOut,
  // });

  colorChange();

  // tl.to(
  //   "img",
  //   { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" },
  //   "-=1.1"
  // );
}
// BarbaJS Content animation Function
// --------------------------------------------------

// BarbaJS delay function
function delay(n) {
  n = n || 1000;
  return new Promise((done) => {
    setTimeout(() => {
      done();
    }, n);
  });
}
// BarbaJS delay function
// --------------------------------------------------

// BarbaJS init start
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
        let tag = document.querySelector(".work-container h1 ");
        tag.addEventListener("click", (e) => {
          console.log("works");
        });
      },
    },
    {
      namespace: "home",
      beforeEnter(data) {
        const changer = () => {
          if (window.innerWidth < 400) {
            document.querySelector("#momName").innerHTML = "HE<br>LLO";
          } else {
            console.log("holis");
          }
        };
        changer();
        colorChange();
      },
    },
  ],
});
// BarbJS init end
