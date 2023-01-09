const title = document.getElementById("poll__title");
const answers = document.getElementById("poll__answers");

const xhr = new XMLHttpRequest();
xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/poll");

xhr.addEventListener("readystatechange", function () {
   if (this.readyState !== this.DONE) {
      return;
   }

   const poll = JSON.parse(this.responseText);
   title.innerText = poll.data.title;

   let buttonsHTML = "";
   for (let i = 0; i < poll.data.answers.length; i++) {
      buttonsHTML += `
      <button class = "poll__answer" value = "${i}">${poll.data.answers[i]}</button>`;
   }
   answers.innerHTML = buttonsHTML;

   for (const button of answers.querySelectorAll(".poll__answer")) {
      button.addEventListener("click", () => {
         alert("Спасибо, ваш голос засчитан!")
      });
   }
});

xhr.send();