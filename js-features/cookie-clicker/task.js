const cookie = document.getElementById('cookie');
const clickerCounter = document.getElementById('clicker__counter');

cookie.onclick = function () {
   let click = clickerCounter.textContent++;
   if (click % 2 == 0) {
      cookie.width = 120;
   } else {
      cookie.width = 200;
   }
}