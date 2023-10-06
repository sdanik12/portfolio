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
    loop: true,
    nav: true,
    margin: 10,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      960: {
        items: 1,
      },
      1200: {
        items: 1,
      },
    },
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
  var swiper = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 30,
    effect: "fade",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
});
