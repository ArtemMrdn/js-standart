//Массивы 
let cities = ['Berlin', 'London', 'Paris']; 
console.log(cities);

cities[3] = 'Kiev'; //Добавление значения в массив
cities[0] = 'Athens'; //изменение значения элементов массива
let cityName = [cities[3]];

console.log('The last array element - ' + cityName);
console.log(cities[1]);
console.log(cities[2]);

//работа с циклом

for(let index = 0; index < cities; index++) {   //Цикл со счетчиком от 0 до 3
   const element = cities[index];
   console.log(element);
}


//проход по значениям массива cities
//на каждой итерации в переменную city будет записываться следующее значение из массива
for(let city of cities) {
  console.log(city);
}



 //Поиск максимального значение массива

let values = [10, 20, 30, 400, 200, 1];
let max = Number.MIN_VALUE;

for(let index2 = 0; index2 < values.length; index2++) {
  const element2 = values[index2]
  if (element2 > max) {
    max = element2;
  }
}
console.log('Максимальное значение с массива = ' + max);



//Магазин с прошлых уроков
let names = [];
names[0] = 'Бумага';
names[1] = 'Биндер';
names[2] = 'Ручка';

let prices = [];
prices[0] = 120;
prices[1] = 220;
prices[2] = 20;


let products = [];

for(let index = 0; index < names.length; index++) {
  const name = names[index];
  const price = prices[index];

  products[index] = +prompt(`Укажите количество продуктов ${name}, цена ${price} `, 0);
}

let totalPrice = 0;
for(let index = 0; index < products.length; index++) {
  totalPrice += prices[index] * products[index]
}

let shippingMessage;

if (totalPrice > 1000) {
    shippingMessage = 'Доставка за наш счет.';
} else {
    shippingMessage = 'Бесплатная доставка от 1000. Стоимость доставки 15.';
}

alert(`Общая сумма: ${totalPrice}, ${shippingMessage}`);