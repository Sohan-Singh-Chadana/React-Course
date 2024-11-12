const leftArrowBtn = document.querySelector(".left-arrow");
const rightArrowBtn = document.querySelector(".right-arrow");
const basket1Elem = document.querySelector(".basket-1 span");
const basket2Elem = document.querySelector(".basket-2 span");

let basket1Apple = 10;
let basket2Apple = 0;

basket1Elem.innerHTML = basket1Apple;
basket2Elem.innerHTML = basket2Apple;

rightArrowBtn.addEventListener("click", () => {
  if (basket1Apple > 0) {
    basket1Apple--;
    basket2Apple++;
    IncreAndDecreFun(basket1Apple, basket2Apple);
  }
});
leftArrowBtn.addEventListener("click", () => {
  if (basket2Apple > 0) {
    basket1Apple++;
    basket2Apple--;
    IncreAndDecreFun(basket1Apple, basket2Apple);
  }
});

function IncreAndDecreFun(basket1, basket2) {
  //   if (basket1 === 0) {
  //     rightArrowBtn.disabled = true;
  //     leftArrowBtn.disabled = false;
  //   }
  //   if (basket2 === 0) {
  //     rightArrowBtn.disabled = false;
  //     leftArrowBtn.disabled = true;
  //   }
  basket1Elem.innerHTML = basket1;
  basket2Elem.innerHTML = basket2;
}
