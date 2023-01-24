const signin = document.getElementById('signin');
const signinForm = document.getElementById('signin__form');
const signout = document.getElementById('signout__btn');
const userId = document.getElementById('user_id');
const welcome = document.getElementById('welcome');

window.onload = () => {
   if (localStorage.userId) {
      welcome.classList.add('welcome_active');
      userId.innerText = localStorage.userId;
      showSignout();
   } else {
      signin.classList.add('signin_active');
   }
}

signinForm.addEventListener("submit", e => {
   e.preventDefault();

   const xhr = new XMLHttpRequest();
   xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
   const formData = new FormData(signinForm);

   xhr.onload = function () {
      let responseObj = JSON.parse(xhr.response);

      if (responseObj.success) {
         localStorage.userId = responseObj.user_id;
         signin.classList.remove('signin_active');
         welcome.classList.add('welcome_active');
         userId.innerText = localStorage.userId;
         showSignout();
      } else {
         clearInput();
         showModal();
      }
   }
   xhr.send(formData);
});


function showModal() {
   let div = document.createElement('div');
   div.className = 'modal'
   div.style.cssText = `
      display: flex;
      justify-content: center;
      align-items: center;
      position: fixed;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.5);
      `

   div.innerHTML = `
   <div class="modal__content">
      <div class="modal__header">
        <div class="modal__title">Неверный логин/пароль</div>
      </div>
      <div class="modal__footer">
        <button class="btn" onclick="clearModal()">Закрыть</button>
      </div>
      </div>
      `

   signin.prepend(div);
}

function clearModal() {
   const modalElement = document.querySelector('.modal');
   modalElement.remove();
}

function showSignout() {
   signout.classList.add('modal__close');
   signout.setAttribute('onclick', 'exitSingin()');
   signout.textContent = 'Выйти';
   document.body.prepend(signout);
}

function exitSingin() {
   localStorage.clear();
   welcome.classList.remove('welcome_active');
   signin.classList.add('signin_active');
   clearInput();
   signout.remove();
}

function clearInput() {
   for (let input of signinForm.querySelectorAll("input")) {
      input.value = '';
   }

}