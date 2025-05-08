"use strict";

// video play

let playBtn = document.querySelector(".ri-play-large-fill");
let video = document.querySelector("video");
let thumbnail = document.querySelector("#thumbnail");
let isPlay;
console.log(video.src);

playBtn.addEventListener(
  "click",
  function () {
    if (video.paused) {
      video.play();
      playBtn.classList.replace("ri-play-large-fill", "ri-pause-large-fill");
      thumbnail.style.opacity = 0;
    } else {
      video.pause();
      playBtn.classList.replace("ri-pause-large-fill", "ri-play-large-fill");
      setTimeout(() => {
        thumbnail.style.opacity = 0.8;
      }, 3000);
    }
  },
  false
);

//slider

$(".bxslider").bxSlider({
  minSlides: 3,
  maxSlides: 3,
  slideWidth: 1000,
  moveSlides: 2,
  slideMargin: 1,
  shrinkItems: false,
  autoControls: true,
  Controls: false,

  startText: "Start",
});

$(function () {
  let vh = $(window).height();
  $(window).scroll(function () {
    var top = $(this).scrollTop();
    var left = $(this).scrollLeft();
    console.log(top, left);

    if (top >= $("#contact").offset().top - 500) {
      $(".internal a").removeClass("active");
      $(".internal li:eq(4) a").addClass("active");
    } else if (top >= $("#shop").offset().top - 50) {
      $(".internal a").removeClass("active");
      $(".internal li:eq(3) a").addClass("active");
    } else if (top >= $("#menu").offset().top - 50) {
      $(".internal a").removeClass("active");
      $(".internal li:eq(2) a").addClass("active");
    } else if (top >= $("#about").offset().top - 150) {
      $(".internal a").removeClass("active");
      $(".internal li:eq(1) a").addClass("active");
    } else if (top >= $("#home").offset().top - 50) {
      $(".internal a").removeClass("active");
      $(".internal li:eq(0) a").addClass("active");
    } else {
      $(".internal a").removeClass("active");
    }
  });
});
