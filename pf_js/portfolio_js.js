$(document).ready(function () {
  $("#btn").click(function () {
    var page2 = $(".page2").offset();
    $("html").animate({ scrollTop: page2.top }, 400);
  });
  $("nav").css("visibility", "hidden");
  $(window).scroll(function () {
    let scroll = $(this).scrollTop();
    console.log(scroll);

    if (scroll <= 800) {
      $("nav").css("visibility", "hidden");
    } else if (scroll > 800 && scroll <= 2028) {
      $("nav").css("visibility", "visible");
    } else {
      $("nav").css("visibility", "visible");
    }
  });
  // ------------------------------네비게이션 클릭 이동 시작------------------------//
  $("nav .circle")
    .eq(0)
    .click(function () {
      var page1 = $(".page1").offset();
      $("html").animate({ scrollTop: page1.top }, 400);
    });
  $("nav .circle")
    .eq(1)
    .click(function () {
      var page2 = $(".page2").offset();
      $("html").animate({ scrollTop: page2.top }, 400);
    });
  $("nav .circle")
    .eq(2)
    .click(function () {
      var page3 = $(".page3").offset();
      $("html").animate({ scrollTop: page3.top }, 400);
    });
  $("nav .circle")
    .eq(3)
    .click(function () {
      var resume = $(".contact").offset();
      $("html").animate({ scrollTop: resume.top }, 400);
    });
  // ------------------------------네비게이션 클릭 이동 끝------------------------//
});