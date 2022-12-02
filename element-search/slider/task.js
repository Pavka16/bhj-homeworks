const maxIndex = 5;
let n = 0;

const slider = document.getElementsByClassName("slider__item");
const prev = document.getElementsByClassName("slider__arrow_prev")[0];
const next = document.getElementsByClassName("slider__arrow_next")[0];

function setSlide() {
   slider[n].className = "slider__item slider__item_active";
}

function clearSlide() {
   slider[n].className = "slider__item";
}

next.onclick = function () {
   clearSlide();
   n++;
   if (n >= maxIndex) {
      n = 0;
   }
   setSlide();
}

prev.onclick = function () {
   clearSlide();
   n--;
   if (n < 0) {
      n = maxIndex - 1;
   }
   setSlide();
}