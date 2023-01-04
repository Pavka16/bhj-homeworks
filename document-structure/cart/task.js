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