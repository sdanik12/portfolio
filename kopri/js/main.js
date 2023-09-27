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
  // let i = 1;
  // $("#btn_top").click(function () {
  //   if (i == 1) {
  //     for (let i = 0; i < 4; i++) {
  //       $(".square")
  //         .eq(i)
  //         .css({ background: "url(images/article" + (i + 2) + ".png)" });
  //       if (i == 3) {
  //         $(".square").eq(3).css({ background: "url(images/article1.png)" });
  //       }
  //     }
  //     $(".dot li a").removeClass();
  //     $(".dot li").eq(i).find("a").addClass("on");
  //     i++;
  //   } else if (i == 2) {
  //     for (let i = 0; i < 4; i++) {
  //       $(".square")
  //         .eq(i)
  //         .css({ background: "url(images/article" + (i + 3) + ".png)" });
  //       if (i == 2) {
  //         $(".square").eq(2).css({ background: "url(images/article1.png)" });
  //       }
  //       if (i == 3) {
  //         $(".square").eq(3).css({ background: "url(images/article2.png)" });
  //       }
  //     }
  //     $(".dot li a").removeClass();
  //     $(".dot li").eq(i).find("a").addClass("on");
  //     i++;
  //   } else if (i == 3) {
  //     $(".square").eq(0).css({ background: "url(images/article4.png)" });

  //     $(".square").eq(1).css({ background: "url(images/article1.png)" });

  //     $(".square").eq(2).css({ background: "url(images/article2.png)" });

  //     $(".square").eq(3).css({ background: "url(images/article3.png)" });

  //     $(".dot li a").removeClass();
  //     $(".dot li").eq(i).find("a").addClass("on");
  //     i = 0;
  //   } else if (i == 0) {
  //     $(".square").eq(0).css({ background: "url(images/article1.png)" });

  //     $(".square").eq(1).css({ background: "url(images/article2.png)" });

  //     $(".square").eq(2).css({ background: "url(images/article3.png)" });

  //     $(".square").eq(3).css({ background: "url(images/article4.png)" });

  //     $(".dot li a").removeClass();
  //     $(".dot li").eq(i).find("a").addClass("on");
  //     i++;
  //   }
  // });
  $(".loop").owlCarousel({
    center: true,
    items: 1,
    loop: true,
    margin: 10,
    nav: true,
    autoplay: false,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      600: {
        items: 2,
      },
    },
  });
  $(".nonloop").owlCarousel({
    center: true,
    items: 1,
    loop: false,
    margin: 10,
    nav: true,
    autoplay: false,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      600: {
        items: 2,
      },
    },
  });
});
