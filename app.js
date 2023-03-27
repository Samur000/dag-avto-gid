const activeAcc = document.querySelector('.accordion__body.active')
activeAcc.style.maxHeight = activeAcc.scrollHeight + "px"

const acc = document.querySelectorAll(".accordion__title");
acc.forEach((el) => {
   el.addEventListener("click", function () {
      
      const panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
         panel.style.maxHeight = null;
         this.firstElementChild.querySelector('.vert').classList.remove('active')
      } else {
         panel.style.maxHeight = panel.scrollHeight + "px";
         this.firstElementChild.querySelector('.vert').classList.add('active')
      }
   });
});