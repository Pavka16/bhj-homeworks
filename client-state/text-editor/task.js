const editor = document.getElementById("editor");
const clear = document.getElementById("clear");
const key = "editorText";

clear.addEventListener("click", () => editor.value = "");
window.addEventListener("unload", () => localStorage[key] = editor.value);
editor.value = localStorage[key];