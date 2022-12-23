const checkBoxs = document.getElementsByClassName("interest__check");

for (const checkBox of checkBoxs) {
   checkBox.addEventListener("change", function () {
      changeChildBoxes(this);
   })
}

const changeChildBoxes = checkBox => {
   for (const childBox of checkBox.closest("li").querySelectorAll(".interest__check")) {
      childBox.checked = checkBox.checked;
   }
}