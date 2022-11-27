
const addText = function () {
   const output = document.getElementById('timer');
   output.textContent -= 1;
   if (output.textContent <= 0) {
      alert("Вы победили в конкурсе");
      clearInterval(timerID);
   }
}
const timerID = setInterval(addText, 1000);

