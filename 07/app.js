//switch 

let dayNumber = 1;

switch (dayNumber) {
  case 1:
    console.log("day is 1");
    break;
  case 2:
    console.log("day is 2");
  case 3:
    console.log("day is 3");
}









let product1 = 'Бумага' 
let product2 = 'Биндеры для бумаги'
let product3 = 'Ручка'

let productPrise1 = 100;
let productPrise2 = 200;
let productPrise3 = 300;

let productQuantity1 = +prompt(`Укажите количество продуктов ${product1}, цена ${productPrise1}`);
let productQuantity2 = +prompt(`Укажите количество продуктов ${product2}, цена ${productPrise2}`);
let productQuantity3 = +prompt(`Укажите количество продуктов ${product3}, цена ${productPrise3}`);

let totalPrice = 0;

totalPrice = productPrise1 * productQuantity1;
totalPrice = productPrise2 * productQuantity2;
totalPrice = productPrise3 * productQuantity3;

let shippingPrice = 0;
let shippingMessage

let shippingType = prompt('Выберите способ доставки: 1 - Курьер\r\n 2 - Служба доставки А\r\n 3 - Служба доставки Б');
switch(shippingType) {
  case '1':
    shippingPrice = 30;
    alert('Выбран способ доставки курьером');
    break;
  case '2':
    shippingPrice = 20;
    alert('Выбран способ службой доставки А');
    break;
  case '3':
    shippingPrice = 15;
    alert('Выбран спос службой доставки Б');
    break;
  default:
    shippingPrice = 30;
    alert('Выбран способ доставки курьером');
    break;
}

if(totalPrice > 1000) {
  shippingPrice = 0;
  shippingMessage = 'Доставка за наш счет';
} else {
  shippingMessage = `Стоимость доставки ${shippingPrice}`;
}

alert(`Сумма вашего заказа ${totalPrice}. ${shippingMessage}`)
