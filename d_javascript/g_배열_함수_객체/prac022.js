// 정의 (id, name, price, quantity)
let cart = [];

// 장바구니에 상품 추가(findIndex)
function addToCart (id, name, price, quantity) {
  const index = cart.findIndex(item => item.id === id);

  if (index > -1) {
    cart[index].quantity =+ quantity;
  } else {
    cart.push({ id, name, price, quantity });
  }
  displayCart();
}
//  장바구니 내의 모든 상품 조회
function displayCart () {
  cart.forEach(item => {
    console.log(`${item.name}의 가격은$${item.price}이고 ${item.quantity}개 담았습니다.`);
    console.log(`장바구니의 총 가격은 $${item.price * item.quantity}`);
  });
}
// 장바구니 수량 변경
function updateQuantity (id, quantity) {
  const index = cart.filter(item => item.id === id);
  
  if(index > -1) {
    cart[index].quantity += quantity
  } else {
    console.log('유효하지 않은 상품');
  }
  displayCart();
}
// 상품 삭제
function removeFromCart (id) {
  cart = cart.filter(item => item.id !== id );
  displayCart();
}
// 총합
function calculateTotal () {
  let total = cart.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);
  console.log(`장바구니 합계 ${total}`);
}
// 전체삭제
function clearCart () {
  cart = [];
  console.log('장바구니가 비어있습니다.');
  displayCart();
}

addToCart(1, 'banana', 3000, 3);
addToCart(2, 'orange', 2000, 1);

updateQuantity(1, 5);


function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

function randomColorFunc () {
  return `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
}

const bgButton = document.querySelector('#bgChange');
bgButton.onclick = function () {
  const randomColor = randomColorFunc();

  bgButton.style.backgroundColor = randomColor;
}