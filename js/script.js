const btt = $("#back-to-top");
$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btt.addClass("visible");
  } else {
    btt.removeClass("visible");
  }
});
btt.click(function (e) {
  e.preventDefault();
  $("html,body").animate({ scrollTop: 0 }, 500);
});

// 메인슬라이드
const slide = document.querySelector(".slide");
const bar = document.querySelectorAll(".bar");
const mainTop = document.querySelectorAll(".main_top_area");

window.onload = function () {
  let i = 0;
  setInterval(function () {
    for (let j = 0; j < mainTop.length; j++) {
      bar[j].classList.remove("barColor");
    }
    slide.style.transition = `2s`;
    slide.style.transform = `translate3d(-${1903 * i}px, 0px, 0px)`;
    i++;

    bar[i - 1].classList.add("barColor");

    if (i === mainTop.length) {
      i = 0;
    }
  }, 4000);
};

//light-box
/* menu list btn */
$("#nav").mouseover(function () {
  $("#nav").addClass("action");
  $(".no_touch").css("display", "block");
});
$("#nav").mouseout(function () {
  $("#nav").removeClass("action");
  $(".no_touch").css("display", "none");
});

/* sub2페이지 detailWrap */
var slider = $("#slick_slider>div"),
  open_btn = $("#sub_contents_area .detail_open_btn"),
  thumbnail_btn = $("#slick_slider .contain_thumb .thumbnail_list div"),
  detail_content = $("#slick_slider .slick_slide_detail"),
  detail_content_ac = $("#slick_slider .slick_slide_detail.slick-active"),
  thumbnail_img_ac = $("#slick_slider .contain_thumb a.slick-active"),
  thumbnail_img = $("#slick_slider .contain_thumb a"),
  detail_area = $("#slick_slider .content_detail_area");

detail_area.css({ "z-index": "998", display: "none" });

thumbnail_btn.css({ "z-index": "999", opacity: "1" });
thumbnail_img_ac.css({ "z-index": "999", border: "3px solid #000" });
detail_content.css({ "z-index": "998", opacity: "0" });
detail_content_ac.css({ "z-index": "999", opacity: "1" });

open_btn.eq(0).click(function () {
  slider.removeClass("slick-active").css({ "z-index": "998", opacity: "0" });
  slider.eq(0).addClass("slick-active").css({ "z-index": "999", opacity: "1" });
});
open_btn.eq(1).click(function () {
  slider.removeClass("slick-active").css({ "z-index": "998", opacity: "0" });
  slider.eq(1).addClass("slick-active").css({ "z-index": "999", opacity: "1" });
});
open_btn.eq(2).click(function () {
  slider.removeClass("slick-active").css({ "z-index": "998", opacity: "0" });
  slider.eq(2).addClass("slick-active").css({ "z-index": "999", opacity: "1" });
});
open_btn.eq(3).click(function () {
  slider.removeClass("slick-active").css({ "z-index": "998", opacity: "0" });
  slider.eq(3).addClass("slick-active").css({ "z-index": "999", opacity: "1" });
});
open_btn.eq(4).click(function () {
  slider.removeClass("slick-active").css({ "z-index": "998", opacity: "0" });
  slider.eq(4).addClass("slick-active").css({ "z-index": "999", opacity: "1" });
});
open_btn.eq(5).click(function () {
  slider.removeClass("slick-active").css({ "z-index": "998", opacity: "0" });
  slider.eq(5).addClass("slick-active").css({ "z-index": "999", opacity: "1" });
});
open_btn.eq(6).click(function () {
  slider.removeClass("slick-active").css({ "z-index": "998", opacity: "0" });
  slider.eq(6).addClass("slick-active").css({ "z-index": "999", opacity: "1" });
});
open_btn.eq(7).click(function () {
  slider.removeClass("slick-active").css({ "z-index": "998", opacity: "0" });
  slider.eq(7).addClass("slick-active").css({ "z-index": "999", opacity: "1" });
});
open_btn.eq(8).click(function () {
  slider.removeClass("slick-active").css({ "z-index": "998", opacity: "0" });
  slider.eq(8).addClass("slick-active").css({ "z-index": "999", opacity: "1" });
});
open_btn.eq(9).click(function () {
  slider.removeClass("slick-active").css({ "z-index": "998", opacity: "0" });
  slider.eq(9).addClass("slick-active").css({ "z-index": "999", opacity: "1" });
});
open_btn.eq(10).click(function () {
  slider.removeClass("slick-active").css({ "z-index": "998", opacity: "0" });
  slider
    .eq(10)
    .addClass("slick-active")
    .css({ "z-index": "999", opacity: "1" });
});
open_btn.eq(11).click(function () {
  slider.removeClass("slick-active").css({ "z-index": "998", opacity: "0" });
  slider
    .eq(11)
    .addClass("slick-active")
    .css({ "z-index": "999", opacity: "1" });
});

// 바나나 클릭
thumbnail_btn.eq(0).click(function () {
  detail_content
    .removeClass("slick-active")
    .css({ "z-index": "998", opacity: "0" });
  detail_content
    .eq(0)
    .addClass("slick-active")
    .css({ "z-index": "999", opacity: "1" });
});
thumbnail_btn.eq(1).click(function () {
  detail_content
    .removeClass("slick-active")
    .css({ "z-index": "998", opacity: "0" });
  detail_content
    .eq(1)
    .addClass("slick-active")
    .css({ "z-index": "999", opacity: "1" });
});
thumbnail_btn.eq(2).click(function () {
  detail_content
    .removeClass("slick-active")
    .css({ "z-index": "998", opacity: "0" });
  detail_content
    .eq(2)
    .addClass("slick-active")
    .css({ "z-index": "999", opacity: "1" });
});
thumbnail_btn.eq(3).click(function () {
  detail_content
    .removeClass("slick-active")
    .css({ "z-index": "998", opacity: "0" });
  detail_content
    .eq(3)
    .addClass("slick-active")
    .css({ "z-index": "999", opacity: "1" });
});

// 바나나 썸네일
thumbnail_btn.eq(0).click(function () {
  thumbnail_img
    .removeClass("slick-active")
    .css({ "z-index": "998", border: "none" });
  thumbnail_img
    .eq(0)
    .addClass("slick-active")
    .css({ "z-index": "999", border: "3px solid #000" });
});
thumbnail_btn.eq(1).click(function () {
  thumbnail_img
    .removeClass("slick-active")
    .css({ "z-index": "998", border: "none" });
  thumbnail_img
    .eq(1)
    .addClass("slick-active")
    .css({ "z-index": "999", border: "3px solid #000" });
});
thumbnail_btn.eq(2).click(function () {
  thumbnail_img
    .removeClass("slick-active")
    .css({ "z-index": "998", border: "none" });
  thumbnail_img
    .eq(2)
    .addClass("slick-active")
    .css({ "z-index": "999", border: "3px solid #000" });
});
thumbnail_btn.eq(3).click(function () {
  thumbnail_img
    .removeClass("slick-active")
    .css({ "z-index": "998", border: "none" });
  thumbnail_img
    .eq(3)
    .addClass("slick-active")
    .css({ "z-index": "999", border: "3px solid #000" });
});

// 포도 클릭
thumbnail_btn.eq(4).click(function () {
  detail_content
    .removeClass("slick-active")
    .css({ "z-index": "998", opacity: "0" });
  detail_content
    .eq(7)
    .addClass("slick-active")
    .css({ "z-index": "999", opacity: "1" });
});
thumbnail_btn.eq(5).click(function () {
  detail_content
    .removeClass("slick-active")
    .css({ "z-index": "998", opacity: "0" });
  detail_content
    .eq(8)
    .addClass("slick-active")
    .css({ "z-index": "999", opacity: "1" });
});
thumbnail_btn.eq(6).click(function () {
  detail_content
    .removeClass("slick-active")
    .css({ "z-index": "998", opacity: "0" });
  detail_content
    .eq(9)
    .addClass("slick-active")
    .css({ "z-index": "999", opacity: "1" });
});
thumbnail_btn.eq(7).click(function () {
  detail_content
    .removeClass("slick-active")
    .css({ "z-index": "998", opacity: "0" });
  detail_content
    .eq(10)
    .addClass("slick-active")
    .css({ "z-index": "999", opacity: "1" });
});

// 포도 썸네일
thumbnail_btn.eq(4).click(function () {
  thumbnail_img
    .removeClass("slick-active")
    .css({ "z-index": "998", border: "none" });
  thumbnail_img
    .eq(4)
    .addClass("slick-active")
    .css({ "z-index": "999", border: "3px solid #000" });
});
thumbnail_btn.eq(5).click(function () {
  thumbnail_img
    .removeClass("slick-active")
    .css({ "z-index": "998", border: "none" });
  thumbnail_img
    .eq(5)
    .addClass("slick-active")
    .css({ "z-index": "999", border: "3px solid #000" });
});
thumbnail_btn.eq(6).click(function () {
  thumbnail_img
    .removeClass("slick-active")
    .css({ "z-index": "998", border: "none" });
  thumbnail_img
    .eq(6)
    .addClass("slick-active")
    .css({ "z-index": "999", border: "3px solid #000" });
});
thumbnail_btn.eq(7).click(function () {
  thumbnail_img
    .removeClass("slick-active")
    .css({ "z-index": "998", border: "none" });
  thumbnail_img
    .eq(7)
    .addClass("slick-active")
    .css({ "z-index": "999", border: "3px solid #000" });
});

// detail 열기버튼
$("#view1").click(function () {
  $("#detail_list1").slideToggle(1500);
  $(this).addClass("on");
});
$("#view2").click(function () {
  $("#detail_list2").slideToggle(1500);
  $(this).addClass("on");
});
$("#view3").click(function () {
  $("#detail_list3").slideToggle(1500);
  $(this).addClass("on");
});
$("#view4").click(function () {
  $("#detail_list4").slideToggle(1500);
  $(this).addClass("on");
});
$("#view5").click(function () {
  $("#detail_list5").slideToggle(1500);
  $(this).addClass("on");
});
$("#view6").click(function () {
  $("#detail_list6").slideToggle(1500);
  $(this).addClass("on");
});
$("#view7").click(function () {
  $("#detail_list7").slideToggle(1500);
  $(this).addClass("on");
});
$("#view8").click(function () {
  $("#detail_list8").slideToggle(1500);
  $(this).addClass("on");
});
$("#view9").click(function () {
  $("#detail_list9").slideToggle(1500);
  $(this).addClass("on");
});
$("#view10").click(function () {
  $("#detail_list10").slideToggle(1500);
  $(this).addClass("on");
});
$("#view11").click(function () {
  $("#detail_list11").slideToggle(1500);
  $(this).addClass("on");
});
$("#view12").click(function () {
  $("#detail_list12").slideToggle(1500);
  $(this).addClass("on");
});

// detail 닫기버튼
$("#close1").click(function () {
  $("#detail_list1").slideToggle(1500);
  $(this).addClass("on");
});
$("#close2").click(function () {
  $("#detail_list2").slideToggle(1500);
  $(this).addClass("on");
});
$("#close3").click(function () {
  $("#detail_list3").slideToggle(1500);
  $(this).addClass("on");
});
$("#close4").click(function () {
  $("#detail_list4").slideToggle(1500);
  $(this).addClass("on");
});
$("#close5").click(function () {
  $("#detail_list5").slideToggle(1500);
  $(this).addClass("on");
});
$("#close6").click(function () {
  $("#detail_list6").slideToggle(1500);
  $(this).addClass("on");
});
$("#close7").click(function () {
  $("#detail_list7").slideToggle(1500);
  $(this).addClass("on");
});
$("#close8").click(function () {
  $("#detail_list8").slideToggle(1500);
  $(this).addClass("on");
});
$("#close9").click(function () {
  $("#detail_list9").slideToggle(1500);
  $(this).addClass("on");
});
$("#close10").click(function () {
  $("#detail_list10").slideToggle(1500);
  $(this).addClass("on");
});
$("#close11").click(function () {
  $("#detail_list11").slideToggle(1500);
  $(this).addClass("on");
});
$("#close12").click(function () {
  $("#detail_list12").slideToggle(1500);
  $(this).addClass("on");
});
