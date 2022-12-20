const book = document.getElementById("book");
const fontSizes = document.getElementsByClassName("font-size");
const textColors = document.querySelector(".book__control_color").querySelectorAll(".color");
const backgroundColors = document.querySelector(".book__control_background").querySelectorAll(".color");

for (const fontSize of fontSizes) {
   fontSize.addEventListener("click", function() {
      event.preventDefault();
      const prevSize = this.parentElement.querySelector(".font-size_active");
      if (this === prevSize) {
         return 
      } else {
         prevSize.classList.remove("font-size_active");
         this.classList.add("font-size_active");

         book.classList.remove("book_fs-" + prevSize.dataset.size);
         book.classList.add("book_fs-" + this.dataset.size);
      }
   })
}

for (const backgroundColor of backgroundColors) {
   backgroundColor.addEventListener("click", function() {
      event.preventDefault();
      const prevColor = this.parentElement.querySelector(".color_active");
      if (this === prevColor) {
         return
      } else {
         prevColor.classList.remove("color_active");
         this.classList.add("color_active");

         book.classList.remove("book_bg-" + prevColor.dataset.bgColor);
         book.classList.add("book_bg-" + this.dataset.bgColor);
      }
   })
}

for (const textColor of textColors) {
   textColor.addEventListener("click", function() {
      event.preventDefault();
      const prevColor = this.parentElement.querySelector(".color_active");
      if (this === prevColor) {
         return
      } else {
         prevColor.classList.remove("color_active");
         this.classList.add("color_active");
         
         book.classList.remove("book_color-" + prevColor.dataset.textColor);
         book.classList.add("book_color-" + this.dataset.textColor);
      }
   })
}