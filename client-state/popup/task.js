const modalWindow = document.getElementById("subscribe-modal");
const modalClose = document.querySelector(".modal__close");

const getCookie = (name) => {
   const value = ";" + document.cookie;
   let parts = value.split(";" + name + "=");
   if (parts.length === 2) {
      return parts.pop().split(";").shift();
   }
}

modalClose.addEventListener("click", () => {
   modalWindow.classList.remove("modal_active");
});

if (getCookie("modal") !== "close") {
   modalWindow.classList.add("modal_active");
}