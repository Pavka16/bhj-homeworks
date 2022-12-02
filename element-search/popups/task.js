const modal_main = document.getElementById('modal_main');
const modal_success = document.getElementById('modal_success');
const modal__close = document.getElementsByClassName('modal__close');
const show_success = document.getElementsByClassName('show-success');

modal_main.className = 'modal modal_active';

for (let i = 0; i < modal__close.length; i++) {
   modal__close[i].onclick = function () {
      modal__close[i].closest('.modal').className = 'modal';
      if (modal__close[i] === show_success[0]) {
         modal_success.className = 'modal modal_active';
      }
   }
}