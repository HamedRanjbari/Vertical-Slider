const $ = document;
const sliderContainer = $.querySelector(".slider-container");
const slideRight = $.querySelector(".right-slide");
const slideLeft = $.querySelector(".left-slide");
const upBtn = $.querySelector(".up-button");
const downBtn = $.querySelector(".down-button");
const slidesLength = slideRight.querySelectorAll("div").length;
let activeIdx = 0;

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;

upBtn.addEventListener("click", () => changeSlide("up"));
downBtn.addEventListener("click", () => changeSlide("down"));
const changeSlide = (direction) => {
  const sliderHeight = sliderContainer.clientHeight;
  if (direction === "up") {
    activeIdx++;
    if (activeIdx > slidesLength - 1) {
      activeIdx = 0;
    }
  } else if (direction === "down") {
    activeIdx--
    if (activeIdx < 0) {
      activeIdx = slidesLength - 1;
    }
  }
  slideRight.style.transform = `translateY(-${activeIdx * sliderHeight}px)`
  slideLeft.style.transform = `translateY(${activeIdx * sliderHeight}px)`
};
