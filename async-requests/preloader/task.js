const listCurrency = document.getElementById("items");
const loader = document.getElementById("loader");

const outputData = data => {
   if (data.length === 0) {
      return;
   }

   data.sort((a, b) => {
      if (a.name < b.name) return -1;
      if (a.name == b.name) return 0;
      if (a.name > b.name) return 1;
   });

   let itemsHTML = "";
   for (const item of data) {
      itemsHTML += `
      <div class = "item">
         <div class = "item__code">${item.name}</div>
         <div class = "item__value">${item.value}</div>
         <div class = "item__currency">руб.</div>
      </div>`;
   }
   listCurrency.innerHTML = itemsHTML;
   loader.classList.remove("loader_active");
}

const readLocalData = () => {
   const data = [];
   for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      data.push({name: key, value: localStorage[key]});
   }
   return data;
}

outputData(readLocalData());

const xhr = new XMLHttpRequest();
xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/slow-get-courses");
xhr.addEventListener("readystatechange", function () {
   if (this.readyState !== this.DONE) {
      return;
   }

   const loadBuffer = JSON.parse(this.responseText).response.Valute;
   const serverData = [];
   for (const key in loadBuffer) {
      serverData.push({name: loadBuffer[key].CharCode, value: loadBuffer[key].Value});
   }
   outputData(serverData);

   localStorage.clear();
   for (const item of serverData) {
      localStorage[item.name] = item.value;
   }
});

xhr.send();



// // 'use strict';

// const listCurrency = document.getElementById('items');
// const loader = document.getElementById('loader');

// const outputData = data => {
//   if (data.length === 0)
//     return;
  
//   data.sort((a, b) => {
//     if ( a.name < b.name ) return -1;
//     if ( a.name == b.name ) return 0;
//     if ( a.name > b.name ) return 1;
//   }); 
  
//   let itemsHTML = '';
//   for (const item of data)
//     itemsHTML += `<div class="item"><div class="item__code">${item.name}</div><div class="item__value">${item.value}</div><div class="item__currency">руб.</div></div>`;
//   listCurrency.innerHTML = itemsHTML;
  
//   loader.classList.remove('loader_active');

// } 

// const readLocalData = () => {
//   const data = [];
//   for (let i = 0; i < localStorage.length; i++) {
//     const key = localStorage.key(i);
//     data.push({ name: key, value: localStorage[key] });
//   }
//   return data;
// }

// outputData(readLocalData());

// const request = new XMLHttpRequest();

// request.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');

// request.addEventListener('readystatechange', function() {
//   if (this.readyState !== this.DONE)  
//     return;

//   switch (this.status) {
//     case 0:
//       alert('Нет ответа от сервера');
//       break;
      
//     case 200:
//       const loadBuffer = JSON.parse(this.responseText).response.Valute;
//       const serverData = [];   
//       for (const key in loadBuffer) {
//         serverData.push({ name: loadBuffer[key].CharCode, value: loadBuffer[key].Value });
//       }
      
//       outputData(serverData);
      
//       localStorage.clear();
//       for(const item of serverData)
//         localStorage[item.name] = item.value;
      
//       break;
      
//     default:
//       alert(`Не получены данные от сервера\nКод ответа: ${this.status} (${this.statusText})`);      
//   }

// });

// request.send();




// let valute;
// let valuteContainer = document.getElementById('items');
// let loader = document.getElementById('loader');

// let xhr = new XMLHttpRequest();
// xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
// xhr.responseType = "json";
// xhr.send();

// xhr.onreadystatechange = function () {
//     if(xhr.readyState === 4) {
//         valute = xhr.response.response.Valute;
//         console.log(valute);
//         console.log(typeof(valute));    
//     }

//     loader.classList.toggle('loader_active');

//     for (let valuteItem of valute) {
//         valuteContainer.insertAdjacentHTML("afterBegin",
//         `<div class="item__code">${valuteItem.CharCode}</div>
//         <div class="item__value">${valuteItem.Value}</div>
//         <div class="item__currency">руб.</div>`);
//     }
// }