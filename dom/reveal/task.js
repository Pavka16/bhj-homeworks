const reveals = document.getElementsByClassName("reveal");

window.addEventListener("scroll", () => {
   for (const reveal of reveals) {
      const { innerHeight } = window;
      const { top } = reveal.getBoundingClientRect();
      if (top < innerHeight && top > 0) {
         reveal.classList.add("reveal_active");
      } else {
         reveal.classList.remove("reveal_active");
      }  
   }
})