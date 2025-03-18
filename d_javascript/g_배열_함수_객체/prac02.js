// 정의 (id, name, price, quantity)
let cart = [];

// 장바구니에 상품 추가(findIndex)
function addToCart (id, name, price, quantity) {
  const index = cart.findIndex(item => item.id === id);
  if (index > -1) {
    cart[index].quantity += quantity;
  } else {
    cart.push({id, name, price, quantity});
  }
  displayCart();
}

// 장바구니 내의 모든 상품 조회
function displayCart () {
  cart.forEach(item => {
    console.log(`${item.name} - price$${item.price}, Quantity: ${item.quantity}`);

    console.log(`Total ${item.name}'s Price: $${item.price * item.quantity}`);
  });
}
// 특정 상품 수량을 변경하는 함수
function updateQuantity (id, quantity) {
  const index = cart.findIndex(item => item.id === id);

  if (index > -1 && quantity > 0) {
    cart[index].quantity += quantity;
  } else {
    console.log('유효하지 않거나 수량0이상');
  }
}
// 특정 상품을 삭제하는 함수
function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  displayCart();
}
// 장바구니의 총 합을 계산하는 함수
function calculateTotal (){
  let total = cart.reduce((acc, item) => {
    return acc + (item.price * item.quantity)
  }, 0)
  console.log(`Cart Total Price: $${total}`);
}
// 장바구니 전체 상품을 삭제하는 함수
function clearCart () {
  cart = [];
  console.log('장바구니가 비어있습니다');
  displayCart();
}

//! === 장바구니 시스템 사용 ===
addToCart(1, 'banana', 3000, 3);
addToCart(2, 'orange', 2000, 1);

updateQuantity(1, 5);

removeFromCart(1);

addToCart(3, 'mango', 4000, 2);

calculateTotal(); // Cart Total Pirce: $10000

clearCart(); // Cart is empty!

// 정의 (id, name, price, quantity)

// 장바구니에 상품 추가(findIndex)

//  장바구니 내의 모든 상품 조회

// 장바구니 수량 변경

// 상품 삭제

// 총합

// 전체삭제