$(function () {
  //---------------------------------내비게이션 시작-------------------------//
  let subMenu = document.querySelectorAll(".submenu");
  let sub = document.querySelectorAll(".lnb");
  let gnb = document.querySelectorAll(".menu ul li a");
  let Lnb = document.querySelectorAll(".lnb");
  let ht = Lnb[0].offsetHeight;
  console.log("ht : " + ht);
  // for (let i = 0; i < 4; i++) {
  //   subMenu[i].style.opacity = "0";
  // }
  gnb.forEach(function (item, keys) {
    item.addEventListener("mouseenter", function (e) {
      let j = Array.from(gnb).indexOf(e.target);
      function others(item) {
        return item !== j;
      }
      let otherItem = Array.from(subMenu).filter(others);
      otherItem.forEach(function (item) {
        item.style.height = "0px";
        item.style.opacity = "0";
      });
      sub.forEach(function () {
        let subht = sub[j].offsetHeight;
        console.log("subht : " + subht);
        subMenu[j].style.height = subht + "px";
        subMenu[j].style.opacity = "1";
      });
    });

    item.addEventListener("mouseleave", function () {
      for (let i = 0; i <= 4; i++) {
        subMenu[i].style.height = 0 + "px";
      }
    });
  });
  subMenu.forEach(function (item, keys) {
    item.addEventListener("mouseenter", function (e) {
      let j = Array.from(subMenu).indexOf(e.target);
      sub.forEach(function () {
        let subht = sub[j].offsetHeight;
        console.log("subht : " + subht);
        subMenu[j].style.height = subht + "px";
        subMenu[j].style.opacity = "1";
      });
      gnb[j].classList.add("on", "active");
    });
    item.addEventListener("mouseleave", function (e) {
      for (let i = 0; i <= 4; i++) {
        subMenu[i].style.height = 0 + "px";
      }
      gnb[keys].classList.remove("on", "active");
    });
  });
  //---------------------------------내비게이션 끝---------------------------//
  //---------------------------------기사 슬라이드 시작---------------------------//
  var owl = $(".owl-carousel");
  owl.owlCarousel({
    autoplay: true,
    rewind: true,
    loop: true,
    nav: true,
    margin: 10,
    items: 1,
  });
  owl.on("mousewheel", ".owl-stage", function (e) {
    if (e.deltaY > 0) {
      owl.trigger("next.owl");
    } else {
      owl.trigger("prev.owl");
    }
    e.preventDefault();
  });
  //-------------------------------------기사 슬라이드 끝----------------------------//
  //--------------------------------하단 슬라이드 시작------------------------------//
  $(".slide-btn").eq(0).find("button").addClass("on");
  var swiper = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 0,
    effect: "fade",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    on: {
      slideChange: function () {
        let currentIndex = this.realIndex;
        // console.log(currentIndex);
        // Swiper 슬라이드가 변경될 때 메뉴 항목의 활성 상태를 업데이트
        $(".slide-btn button").removeClass("on");
        $(".slide-btn").eq(currentIndex).find("button").addClass("on");
      },
    },
  });
  $(".slide-btn button").on("click", function (e) {
    e.preventDefault();
    let targetIndex = parseInt($(this).data("slide-index"));
    $(".swiper-pagination-bullet:eq(" + targetIndex + ")").trigger("click");
  });

  $(".slide-btn button").hover(
    function () {
      swiper.autoplay.stop();
    },
    function () {
      swiper.autoplay.start();
    }
  );
  //--------------------------------하단 슬라이드 끝------------------------------//
  //--------------------------------푸터 패밀리사이트 버튼------------------------//
  let fsite = true;
  $(".fsite_btn").click(function () {
    if ($(".fsite").css("display") == "none") {
      $(".fsite").slideDown();
    } else {
      $(".fsite").slideUp();
    }
    fsite = !fsite;
  });
  //--------------------------------To Top------------------------//
  $(window).scroll(function () {
    let ht = $(window).scrollTop();
    console.log(ht);
    if (ht > 50) {
      $("#totop").addClass("show");
    } else {
      $("#totop").removeClass("show");
    }
  });
  $("#totop").click(function () {
    $("html, body").animate({ scrollTop: "0" }, 700);
  });
});
