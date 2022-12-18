const reveals = document.getElementsByClassName("reveal");

window.addEventListener("scroll", () => {
   for (const reveal of reveals) {
      if (window.innerHeight > reveal.getBoundingClientRect().top) {
         reveal.classList.add("reveal_active");
      }
   }
})