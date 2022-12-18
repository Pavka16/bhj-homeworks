const rotators = Array.from(document.getElementsByClassName("rotator__case"));

let currentRotator = 0;
setInterval(addChange, 1000);

function getDataSet () {
   let dataSet = rotators[currentRotator].dataset;
   rotators[currentRotator].style.color = dataSet.color;
   rotators[currentRotator].style.speed = dataSet.speed;
}

function addChange() {
   rotators[currentRotator].classList.remove("rotator__case_active");
   currentRotator++;

   if (currentRotator >= rotators.length) {
      currentRotator = 0;
      rotators[currentRotator].classList.add("rotator__case_active");
      getDataSet();
   } else {
      rotators[currentRotator].classList.add("rotator__case_active");
      getDataSet();
   }
}
