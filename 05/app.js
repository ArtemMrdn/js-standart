//Операторы

//Бинарные/Унарные операторы

//Бинарные - которые принимают два аргумента и возвращают один результат   let result = x + y Пример:

let x = 100;
let y = 20;
 
let result;
result = x + y;  // 120
result = x % y;  //0, остатка от деления нету
result = x ** 2; // 10000 - возведение в степень

//Унарные - которые используют один аргумент и возвращают один результат   x++ Пример:
let value1 = 10;

console.log('Инкремент');
value1++; //value = value + 1
console.log(value1); //11

console.log(++value1);  //12   префиксная форма, оператор сразу увеличивает значение, после выводит его
console.log(value1++);  //12   постфиксная форма, оператор выводит значение, после чего увеличивает его
console.log(value1);    //13


console.log('декремент');
value2 = 10;
value2--; //value2 = value2 - 1
console.log(value2); // 9

console.log(--value);   //8
console.log(value--);  //8 
console.log(value);   //7



//Сокращенная арифметика

let value = 10;
value += 10;   // value = value + 10;
value -= 10;   // value = value - 10;
value *= 2;    // value = value * 2;
value /= 2;    // value = value / 2;

let num = +value;  // унарный плюс выполняет преобразование типа, это эквивалент использование Number(value);




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

alert(`Общая сумма: ${totalPrice}`);



