const form = document.getElementById("form");
const progress = document.getElementById("progress");

form.addEventListener("submit", (e) => {
   e.preventDefault();
   const formData = new FormData(form);

   const xhr = new XMLHttpRequest();
   xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/upload");
   xhr.upload.addEventListener("progress", (e) => progress.value = (e.loaded / e.total).toFixed(3));
   xhr.send(formData);
})