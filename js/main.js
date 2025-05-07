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
      { x: "20", y: "1300", rotate: "40", ease: "none", duration: 7 },
      0
    )
    .to(
      ".logoWrap #e",
      { x: "20", y: "1370", rotate: "-50", ease: "none", duration: 7 },
      0.2
    )
    .to(
      ".logoWrap #j",
      { x: "45", y: "1320", rotate: "50", ease: "none", duration: 7 },
      0.4
    )
    .to(
      ".logoWrap #i",
      { x: "55", y: "1310", rotate: "80", ease: "none", duration: 7 },
      0.1
    )
    .to(
      ".logoWrap #s",
      { x: "20", y: "1400", rotate: "40", ease: "none", duration: 7 },
      0
    )
    .to(
      ".logoWrap #e",
      { x: "20", y: "1380", rotate: "-50", ease: "none", duration: 7 },
      0.2
    )
    .to(
      ".logoWrap #o",
      { x: "45", y: "1320", rotate: "50", ease: "none", duration: 7 },
      0.4
    );
};

// about: floating-box
const box = document.querySelector(".floating-box");
let scrollY = window.scrollY;
let prevScrollY = scrollY;
let offsetY = 0; // 현재 박스 위치
let targetOffsetY = 0; // 목표 위치
const ease = 0.2; // 부드럽게 따라가는 정도
const maxOffset = 20; // 최대 이동 거리 (±30px)

function animate() {
  // 스크롤 변화량 계산
  scrollY = window.scrollY;
  const delta = scrollY - prevScrollY;

  // 스크롤 변화가 있을 때만 목표 위치를 약간 움직임
  targetOffsetY = delta * 1.2; // 반응 강도 조절
  targetOffsetY = Math.max(-maxOffset, Math.min(maxOffset, targetOffsetY));

  // 현재 위치가 목표 위치를 부드럽게 따라가게 하기
  offsetY += (targetOffsetY - offsetY) * ease;

  // 적용
  box.style.transform = `translateY(${offsetY}px)`;

  // 현재 스크롤 저장
  prevScrollY = scrollY;

  requestAnimationFrame(animate);
}

animate();

// text coloring animation
gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(
  ".intro .about-me span",
  {
    "background-size": "0% 100%",
  },
  {
    "background-size": "100% 100%",
    scrollTrigger: {
      trigger: ".intro",
      pinnedContainer: ".intro",
      start: "0% 20%",
      end: "50% 60%",
      markers: true,
      scrub: 1,
    },
  }
);
