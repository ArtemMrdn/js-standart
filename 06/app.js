//Условия if/else 
 

//Сценарий каждого курса;

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



let shippingMessage;

if (totalPrice > 1000) {
    shippingMessage = 'Доставка за наш счет.';
} else {
    shippingMessage = 'Бесплатная доставка от 1000. Стоимость доставки 15.';
}

alert(`Общая сумма: ${totalPrice}, ${shippingMessage}`);
