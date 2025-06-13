gsap.registerPlugin(ScrollTrigger);

// visual img 위로 올라가게
gsap.to(".img-slider", {
  y: "-500%", // 화면 위쪽으로 자기 높이만큼 이동
  ease: "none",
  scrollTrigger: {
    trigger: ".visual", // 애니메이션 시작 기준 영역
    start: "top top", // 스크롤 영역 시작
    end: "+=800", // 이 스크롤 구간 동안 애니메이션 진행
    scrub: true, // 스크롤과 애니메이션 동기화
  },
});

// visual svg 이동 + 회전 + fadeOut
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".visual",
      start: "top top",
      end: "+=1000",
      scrub: true,
      pin: true,
    },
  })
  .to(
    ".moon",
    {
      x: -400,
      rotation: 360,
      ease: "none",
      duration: 0.7, // 전체 타임라인 중 70% 구간
    },
    0
  )
  .to(
    ".moon",
    {
      opacity: 0,
      ease: "none",
      duration: 0.3, // 나머지 30% 구간에서 사라짐
    },
    0.8
  )

  .to(
    ".sparkle",
    {
      x: 400,
      rotation: 360,
      ease: "none",
      duration: 0.7,
    },
    0
  )
  .to(
    ".sparkle",
    {
      opacity: 0,
      ease: "none",
      duration: 0.3,
    },
    0.8
  )

  .to(
    ".atom",
    {
      x: -400,
      rotation: 360,
      ease: "none",
      duration: 0.7,
    },
    0
  )
  .to(
    ".atom",
    {
      opacity: 0,
      ease: "none",
      duration: 0.3,
    },
    0.8
  );

// 스크롤에 따라 이동하는 visual svg 애니메이션
const moon = document.querySelector(".moon");
const sparkle = document.querySelector(".sparkle");
const atom = document.querySelector(".atom");

let targetScroll = 0; // 실제 스크롤값
let currentScroll = 0; // 현재 애니메이션에서 사용되는 값

// 스크롤 이벤트로 targetScroll 업데이트
window.addEventListener("scroll", () => {
  targetScroll = window.scrollY;
});

// 매 프레임마다 currentScroll이 targetScroll로 부드럽게 움직임 (lerp)
gsap.ticker.add(() => {
  // lerp 함수 (linear interpolation)
  currentScroll += (targetScroll - currentScroll) * 0.1; // 0.1은 부드러움 정도 (낮을수록 더 느림)

  // 애니메이션에 반영
  gsap.set(moon, {
    x: -currentScroll / 5,
    rotation: currentScroll / 5,
  });
  gsap.set(sparkle, {
    x: currentScroll / 5,
    rotation: currentScroll / 5,
  });
  gsap.set(atom, {
    x: -currentScroll / 10,
    rotation: currentScroll / 5,
  });
});

// visual img 1초마다 변경ㄴ
function setupImageSlider(sliderEl) {
  const imageIndexes = sliderEl.dataset.images.split(","); // ["4", "5", "6"]
  let currentIndex = 0;
  const inner = sliderEl.querySelector(".slider-inner");

  function changeImage() {
    currentIndex = (currentIndex + 1) % imageIndexes.length;
    const newImg = document.createElement("img");
    newImg.src = `./images/img${imageIndexes[currentIndex]}.jpg`;
    newImg.alt = "yeji-pics";

    // 기존 이미지 위로 밀고, 새 이미지 아래에 추가
    inner.appendChild(newImg);

    // 전환 후 처리
    setTimeout(() => {
      const imgs = inner.querySelectorAll("img");
      if (imgs.length > 1) {
        imgs[0].remove(); // 위로 밀린 기존 이미지 제거
      }
    }, 600); // transition과 맞춰야 함
  }

  // 매 1초마다 실행
  setInterval(changeImage, 1000);
}

// 모든 슬라이더 설정
document.querySelectorAll(".img-slider").forEach(setupImageSlider);

$(".accordion ul li .acc-title").on("click", function () {
  const li = $(this).closest("li");
  const desc = $(this).next(".acc-desc");

  if (desc.is(":visible")) {
    // 닫힐 때
    desc.removeClass("animate-in"); // 애니메이션 제거
    desc.removeClass("open");
    desc.slideUp(200);
  } else {
    // 열릴 때
    desc.stop(true, true).slideDown(200, function () {
      // 슬라이드 완료 후 애니메이션 클래스 추가
      desc.addClass("animate-in");
      li.addClass("open");
    });
  }
});

// white-section 을 만나면 색이 변하는 header
document.querySelectorAll(".white-section").forEach((section) => {
  ScrollTrigger.create({
    trigger: section,
    start: "top 10%",
    end: "bottom 10%",
    onEnter: () => document.body.classList.add("light-header"),
    onEnterBack: () => document.body.classList.add("light-header"),
    onLeave: () => document.body.classList.remove("light-header"),
    onLeaveBack: () => document.body.classList.remove("light-header"),
  });
});

$(function () {
  $(".my-skill").slick({
    centerMode: true,
    centerPadding: "1rem",
    slidesToShow: 3,
    autoplay: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "1rem",
          slidesToShow: 1,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
    ],
  });
});
