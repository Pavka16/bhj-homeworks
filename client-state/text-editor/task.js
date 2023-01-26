const editor = document.getElementById("editor");
const clear = document.getElementById("clear");

clear.addEventListener("click", () => editor.value = "");
editor.value = localStorage.getItem("editor");
editor.oninput = () => {
   localStorage.setItem("editor", editor.value);
};