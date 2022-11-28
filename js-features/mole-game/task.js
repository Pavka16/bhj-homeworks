const dead = document.getElementById('dead');
const lost = document.getElementById('lost');

getHole = index => document.getElementById(`hole${index}`);

for (let holeClick = 1; holeClick < 10; holeClick++) {
   let hole = getHole(holeClick);
   hole.onclick = function () {
      if (hole.className.includes('hole_has-mole') === true) {
         dead.textContent++;
         if (dead.textContent === '10') {
            alert("Все кроты убиты. Вы победили!");
            stopGame();
         }
      } else {
         lost.textContent++;
         if (lost.textContent === '5') {
            alert("Вы плохой охотник. Вы проиграли!");
            stopGame();
         }
      }
   }
}

stopGame = () => {
   dead.textContent = 0;
   lost.textContent = 0;
}