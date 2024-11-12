const leftArrowBtn = document.querySelector(".left-arrow");
const rightArrowBtn = document.querySelector(".right-arrow");
const basket1Elem = document.querySelector(".basket-1 span");
const basket2Elem = document.querySelector(".basket-2 span");

let totalApples = 10;
let secondBasketAppleCount = 0;
let firstBasketAppleCount = totalApples - secondBasketAppleCount;

basket1Elem.innerText = firstBasketAppleCount;
basket2Elem.innerText = secondBasketAppleCount;

rightArrowBtn.addEventListener("click", () => {
  if (firstBasketAppleCount > 0) {
    firstBasketAppleCount--;
    basket1Elem.innerText = firstBasketAppleCount;
    secondBasketAppleCount++;
    basket2Elem.innerText = secondBasketAppleCount;
  }
});

leftArrowBtn.addEventListener("click", () => {
  if (secondBasketAppleCount > 0) {
    firstBasketAppleCount++;
    basket1Elem.innerText = firstBasketAppleCount;
    secondBasketAppleCount--;
    basket2Elem.innerText = secondBasketAppleCount;
  }
});
