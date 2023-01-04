const cartProducts = document.querySelector(".cart__products");
const storageKey = "products";

class Product {
   constructor(product) {
      this.id = product.dataset.id;
      this.count = 0;
      this.addedValue = product.querySelector(".product__quantity-value");
      this.image = product.querySelector("img");

      this.buttonDec = product.querySelector(".product__quantity-control_dec");
      this.buttonInc = product.querySelector(".product__quantity-control_inc");
      this.buttonAdd = product.querySelector(".product__add");
      this.buttonDel = product.querySelector(".product__delete");

      this.buttonDec.addEventListener("click", () => this.decAddedValue());
      this.buttonInc.addEventListener("click", () => this.incAddedValue());
      this.buttonAdd.addEventListener("click", () => this.addProduct());
      this.buttonDel.addEventListener("click", () => this.delProduct());
   }

   decAddedValue() {
      if (this.addedValue.innerText > 1) {
         this.addedValue.innerText--;
      }
   }

   incAddedValue() {
      this.addedValue.innerText++;
   }

   addProduct() {
      this.count += +this.addedValue.innerText;
      if (this.cartProduct === undefined) {
         this.cartProduct = document.createElement("div");
         this.cartProduct.className = "cart__product";
         this.cartProduct.dataset.id = this.id;
         this.cartProduct.innerHTML = `<img class = "cart__product-image" src = "${this.image.src}"><div class = "cart__product-count">${this.count}</div>`;
         cartProducts.appendChild(this.cartProduct);
      } else if (this.cartProducts !== null) {
         this.cartProduct.querySelector(".cart__product-count").innerText = this.count;
         return;
      }
   }

   delProduct() {
      if (this.cartProduct === undefined) {
         return;
      }
      this.count = 0;
      this.addedValue.innerText = 1;
      this.cartProduct.remove();
      delete this.cartProduct;
   }
}

for (const elem of document.getElementsByClassName("product")) {
   const product = new Product(elem);

   for (const cartProduct of cartProducts.querySelectorAll(".cart__product")) {
      if (product.id === cartProduct.dataset.id) {
         product.cartProduct = cartProduct;
         product.count = +cartProduct.querySelector(".cart__product-count").innerText;
         break;
      }
   }
}






// const cartProducts = document.querySelector('.cart__products');

// const storageKey = 'products';

// class Product {
//    constructor(product) {
//       this.id = product.dataset.id;
//       this.count = 0;

//       this.addedValue = product.querySelector('.product__quantity-value');

//       this.image = product.querySelector('img');

//       this.buttonDec = product.querySelector('.product__quantity-control_dec');
//       this.buttonInc = product.querySelector('.product__quantity-control_inc');
//       //  this.buttonAdd = product.querySelector('.product__button_add');
//       this.buttonAdd = product.querySelector('.product__add');
//       //  this.buttonDelete = product.querySelector('.product__button_delete');
//       this.buttonDelete = product.querySelector('.product__delete');

//       this.buttonDec.addEventListener('click', () => this.decAddedValue());
//       this.buttonInc.addEventListener('click', () => this.incAddedValue());
//       //  this.buttonAdd.addEventListener('click', () => this.addProduct());
//       this.buttonAdd.addEventListener('click', () => this.addProduct());
//       //  this.buttonDelete.addEventListener('click', () => this.deleteProduct());
//       this.buttonDelete.addEventListener('click', () => this.deleteProduct());

//    }

//    decAddedValue() {
//       if (this.addedValue.innerText > 1)
//          this.addedValue.innerText--;
//    }

//    incAddedValue() {
//       this.addedValue.innerText++;
//    }

//    addProduct() {
//       this.count += +this.addedValue.innerText;

//       if (this.cartProduct === undefined) {
//          this.cartProduct = document.createElement('div');
//          this.cartProduct.className = 'cart__product';
//          this.cartProduct.dataset.id = this.id;
//          this.cartProduct.innerHTML = `<img class="cart__product-image" src="${this.image.src}"><div class="cart__product-count">${this.count}</div>`;

//          cartProducts.appendChild(this.cartProduct);

//       }
//       //  Дописка моя!!!
//       if (this.cartProduct !== null) {
//          this.cartProduct.querySelector('.cart__product-count').innerText = this.count;
//          return;
//       }
//       // else {

//       //       const flyingImage = this.image.cloneNode(false);

//       //       const startPoint = {
//       //         x: this.image.getBoundingClientRect().left,
//       //         y: this.image.getBoundingClientRect().top
//       //       }
//       //       const endPoint = {
//       //         x: this.cartProduct.getBoundingClientRect().left,
//       //         y: this.cartProduct.getBoundingClientRect().top
//       //       };

//       //       flyingImage.style.position = 'fixed';
//       //       flyingImage.style.left = startPoint.x + 'px';
//       //       flyingImage.style.top = startPoint.y + 'px';
//       //       document.querySelector('.cart').appendChild(flyingImage);

//       //       this.animateElementToElement(flyingImage, endPoint, 5, 100);
//       //     }

//       //  localStorage.setItem(storageKey, cartProducts.innerHTML);
//    }

//    deleteProduct() {
//       if (this.cartProduct === undefined)
//          return;

//       this.count = 0;
//       this.addedValue.innerText = 1;
//       this.cartProduct.remove();
//       delete this.cartProduct;

//       // localStorage.setItem(storageKey, cartProducts.innerHTML);
//    }

//    //   animateElementToElement(elem, target, nSteps, tStep) {
//    //     if (nSteps === 1) {
//    //       elem.remove();
//    //       this.cartProduct.querySelector('.cart__product-count').innerText = this.count;
//    //       return;
//    //     }

//    //     const point = {
//    //       x: elem.getBoundingClientRect().left,
//    //       y: elem.getBoundingClientRect().top
//    //     }

//    //     point.x += (target.x - point.x) / nSteps;
//    //     point.y += (target.y - point.y) / nSteps;

//    //     elem.style.left = point.x + 'px';
//    //     elem.style.top = point.y + 'px';

//    //     setTimeout(() => this.animateElementToElement(elem, target, nSteps - 1, tStep), tStep);
//    //   }

// }

// // cartProducts.innerHTML = localStorage.getItem(storageKey);

// for (const elem of document.getElementsByClassName('product')) {
//    const product = new Product(elem);

//    for (const cartProduct of cartProducts.querySelectorAll('.cart__product'))

//       if (product.id === cartProduct.dataset.id) {
//          product.cartProduct = cartProduct;
//          product.count = +cartProduct.querySelector('.cart__product-count').innerText;
//          break;
//       }
// }





// Другой вариант
// const productQuantityControlDec = Array.from(document.querySelectorAll('.product__quantity-control_dec'));
// const productQuantityControlInc = Array.from(document.querySelectorAll('.product__quantity-control_inc'));
// let productQuantityValue = Array.from(document.querySelectorAll('.product__quantity-value'));

// productQuantityControlDec.forEach((item, idx) => {
//   item.addEventListener('click', (event) => {
//     productQuantityValue[idx].textContent == 1 ? false : productQuantityValue[idx].textContent--;
//   })
// })
// productQuantityControlInc.forEach((item, idx) => {
//   item.addEventListener('click', (event) => {
//     productQuantityValue[idx].textContent++;
//   })
// })

// const productAdd = Array.from(document.querySelectorAll('.product__add'));
// let cartProducts = document.querySelector('.cart__products');
// const product = document.querySelectorAll('.product');
// const productImage = document.querySelectorAll('.product__image');

// productAdd.forEach((item, idx) => {
//   item.addEventListener('click', (event) => {
//     const dataId = (product[idx].getAttribute('data-id'));
//     const parent = productImage[idx].closest('.product');
//     const parental = parent.querySelector('.product__image')
//     const imgNeed = parental.getAttribute('src');
//     const meaning = Number(productQuantityValue[idx].outerText);

//     const cartProduct = Array.from(document.querySelectorAll('.cart__product'));
//     const coincidence = cartProduct.find(el => el.dataset.id == event.target.closest('.product').dataset.id);
//       if(!coincidence) {
//         cartProducts.insertAdjacentHTML('beforeend', `
//         <div class="cart__product" data-id=${dataId}>
//           <img class="cart__product-image" src=${imgNeed}>
//           <div class="cart__product-count">${meaning}</div>
//         </div>
//         `);
//       } else {
//         const cartProductCount = coincidence.querySelector('.cart__product-count');
//         cartProductCount.innerText = +cartProductCount.outerText + meaning;
//       }
//   })
// })