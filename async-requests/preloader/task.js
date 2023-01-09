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
xhr.send();