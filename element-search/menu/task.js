const menu__link = document.getElementsByClassName("menu__link");

for (let i = 0; i < menu__link.length; i++) {
   menu__link[i].onclick = function () {
      const menu_sub = this.parentElement.querySelector(".menu_sub");
      if (!menu_sub) {
         return true;
      }

      if (menu_sub.className === "menu menu_sub") {
         menu_sub.className = "menu menu_sub menu_active";
      }
      else (menu_sub.className = "menu menu_sub")
      return false;
   }
}