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
