const tooltipLinks = document.getElementsByClassName("has-tooltip");

for (const link of tooltipLinks) {
   const tooltip = document.createElement("div");
   tooltip.className = "tooltip";
   tooltip.innerText = link.title;
   link.insertAdjacentElement("afterEnd", tooltip);

   link.addEventListener("click", function(e) {
      e.preventDefault();
      const prevTooltip = document.querySelector(".tooltip_active");
      if (prevTooltip) 
         prevTooltip.classList.remove("tooltip_active");
         tooltip.classList.add("tooltip_active");
      
   })
}
