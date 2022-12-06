const tab = document.getElementsByClassName("tab");
const tabContents = document.getElementsByClassName("tab__content");

let tabIndex = 0;

const selectTab = (activeIndex) => {
   tab[tabIndex].classList.remove("tab_active");
   tabContents[tabIndex].classList.remove("tab__content_active");
   tab[activeIndex].classList.add("tab_active");
   tabContents[activeIndex].classList.add("tab__content_active");
   tabIndex = activeIndex;
}

for (let i = 0; tab.length; i++) {
   tab[i].index = i;
   tab[i].addEventListener("click", function () {
      selectTab(this.index);
   })
}