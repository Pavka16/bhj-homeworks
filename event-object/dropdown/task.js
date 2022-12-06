const value = document.getElementsByClassName("dropdown__value")[0];
const menu = document.getElementsByClassName("dropdown__list")[0];
const menuItem = document.getElementsByClassName("dropdown__link");

value.addEventListener("click", function () {
   menu.classList.add("dropdown__list_active");
})

for (i = 0; i < menuItem.length; i++) {
   menuItem[i].addEventListener("click", function (event) {
      event.preventDefault();
      menu.classList.remove("dropdown__list_active");
      value.textContent = this.textContent;
   })
}