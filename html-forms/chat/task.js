const chatWidget = document.querySelector(".chat-widget");
const chatRed = document.querySelector(".chat-widget__side");
const chatMessages = document.getElementById("chat-widget__messages");
const inputMessage = document.getElementById("chat-widget__input");

const messages = [
   "Кто тут? Говорите, не молчите!",
   "Где же ваша совесть?",
   "Добрый день! До свидания! Прощайте!",
   "Мы ничего не будем вам продавать, пока вы что-нибудь у нас не купите!",
   "К сожалению, все операторы заняты или не хотят разговаривать. Не пишите нам больше!",
   "Вы не купили у нас ни одного товара, чтобы так с нами разговаривать!",
   "Добрый день, мы еще спим. Позвоните нам позже, лет через 10, а лучше через 150.",
];

const downTime = 30000;
const timer = {
   counter: downTime,
   repeat: () => {
      timer.counter--;
      if (timer.counter <= 0) {
         robotSpeak();
      }
   }
}

const robotSpeak = () => {
   timer.counter = downTime;
   const index = Math.floor(Math.random() * messages.length);
   chatMessages.innerHTML += `
   <div class = "message">
      <div class = "message__time">${new Date().toLocaleTimeString().substring(0,5)}</div>
      <div class = "message__text">${messages[index]}</div>
   </div>`;
   chatMessages.lastElementChild.scrollIntoView(false);
}

chatRed.addEventListener("click", () => {
   chatWidget.classList.add("chat-widget_active");
   setInterval(timer.repeat);
});

inputMessage.addEventListener("keydown", function(e) {
   if (e.code !== "Enter") {
      return;
   } else if (this.value.length === 0) {
      return;
   } else {
      chatMessages.innerHTML += `
      <div class="message message_client">
         <div class="message__time">${new Date().toLocaleTimeString().substr(0,5)}</div>
         <div class="message__text">${this.value}</div>
      </div>`;  
      this.value = "";
      robotSpeak();
   }
})