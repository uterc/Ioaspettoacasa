let img = document.querySelector("#main-img-container");
let img2 = document.querySelector(".main-img");
function imgScroll() {
  let num = 0;
  let value = 1;
  let times = 0;
 if (window.innerWidth < 600) {
  let int = setInterval(e => {
      let scrollPos = Math.round(
        img2.getBoundingClientRect().width + img2.getBoundingClientRect().x
      );
      let containerWidth = Math.round(img.getBoundingClientRect().width);
    
      num -= value;
      img2.style.marginLeft = num + "px";
      if (scrollPos === containerWidth) {
        value = -1;
        times = 1;
      } else if (img2.getBoundingClientRect().x === 0) {
        if(times = 1){img.style.overflow = 'scroll';
                      clearInterval(int);
      }
      }
    }, 1000 / 60);
  } else {
    return;
  }
}
imgScroll();
