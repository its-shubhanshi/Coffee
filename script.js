"use strict";

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
