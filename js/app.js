let img = document.querySelector("#main-img-container");
let img2 = document.querySelector(".main-img");
  var int;
function imgScroll() {
  let num = 0;
  let value = 1;


  if (window.innerWidth < 600) {
   int = setInterval(e => {
      let scrollPos = Math.round(
        img2.getBoundingClientRect().width + img2.getBoundingClientRect().x
      );
      let containerWidth = Math.round(img.getBoundingClientRect().width);
      num -= value;
      img2.style.marginLeft = num + "px";
      if (scrollPos === containerWidth) {
        value = -1;
      } else if (img2.getBoundingClientRect().x === 0) {
        value = 1;
      }
    }, 1000 / 60);
  } else {
    return;
  }
}
imgScroll();


img.onclick = function(){
  clearInterval(int);
//   img2.style.marginLeft = 0 + "px";
  img.style.overflow = 'scroll'
}
