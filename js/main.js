$(function () {
  Splitting();
});

$(function () {
  let prevScrollTop = 0;

  document.addEventListener("scroll", function () {
    let nowScrollTop = $(window).scrollTop();

    if (nowScrollTop > prevScrollTop) {
      $("header").addClass("active");
    } else {
      $("header").removeClass("active");
    }
    prevScrollTop = nowScrollTop;
  });
});

// yejiseo
window.onload = function () {
  gsap.registerPlugin(ScrollTrigger);

  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".visual",
        start: "100% 100%",
        end: "100% 0%",
        scrub: 1,
        // markers: true,
      },
    })
    .to(
      ".logoWrap #y",
      { x: "20", y: "1750", rotate: "40", ease: "none", duration: 7 },
      0
    )
    .to(
      ".logoWrap #e",
      { x: "20", y: "1820", rotate: "-50", ease: "none", duration: 7 },
      0.2
    )
    .to(
      ".logoWrap #j",
      { x: "45", y: "1770", rotate: "50", ease: "none", duration: 7 },
      0.4
    )
    .to(
      ".logoWrap #i",
      { x: "55", y: "1760", rotate: "80", ease: "none", duration: 7 },
      0.1
    )
    .to(
      ".logoWrap #s",
      { x: "20", y: "1850", rotate: "40", ease: "none", duration: 7 },
      0
    )
    .to(
      ".logoWrap #e",
      { x: "20", y: "1920", rotate: "-50", ease: "none", duration: 7 },
      0.2
    )
    .to(
      ".logoWrap #o",
      { x: "45", y: "1870", rotate: "50", ease: "none", duration: 7 },
      0.4
    );
};

// $(window).load(function () {
//   alert("실행되나여");
// });
