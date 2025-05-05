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

// ex
window.onload = function () {
  gsap.registerPlugin(ScrollTrigger);

  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".ex",
        start: "30% 55%",
        end: "100% 0%",
        scrub: 1,
        markers: true,
      },
    })
    .to(
      ".logoWrap #j",
      { x: "20", y: "1450", rotate: "40", ease: "none", duration: 7 },
      0
    )
    .to(
      ".logoWrap #y",
      { x: "20", y: "1120", rotate: "-50", ease: "none", duration: 7 },
      1
    )
    .to(
      ".logoWrap #o",
      { x: "45", y: "1350", rotate: "50", ease: "none", duration: 7 },
      1.3
    )
    .to(
      ".logoWrap #u",
      { x: "55", y: "1350", rotate: "80", ease: "none", duration: 7 },
      0
    )
    .to(
      ".logoWrap #n",
      { x: "100", y: "1200", rotate: "40", ease: "none", duration: 7 },
      0.5
    )
    .to(
      ".logoWrap #g",
      { x: "140", y: "1100", rotate: "-80", ease: "none", duration: 7 },
      0.2
    );
};
