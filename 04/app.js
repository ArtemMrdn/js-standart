//Строки, преобразование типов 
//Шаблонные строки - используються для создания строки на основе шаблона и значений, определнных в переменных или являющихся результатом выражений 
let firstName = 'Ivan';
let lastName = 'Ivanov';

let fullName = `${firstName} ${lastName}`;  //fullName = "Ivan Ivanov"
let greeting = `Привет, меня зовут ${firstName}!`;
console.log(greeting) //Привет, меня зовут Ivan!

// Конкатенация - операиця склеивания строк
let msg1 = 'Hello';
let msg2 = 'World!';
let joined = msg1 + msg2;
console.log(joined) //Hello World

//Преобразование типов
let message = 123; // тип данных Number
alert(message); //автоматическое преобразование number в тип string т.к, alert выводит только строку.

let value = 1;  //number  
let result;

result = String(value); //string, "2"
result = Boolean(value); //boolean, true, При преобразовании null, undefined, 0, NaN или пустой строки  - будет false, остальное true


//prompt - функция для отображения модального окна с текстом и полем ввода для текста. 
let value = prompt("Введите значнеие", "Значение по умолчанию");
console.log(`Вы ввели значение ${value}`);

//Пример №2
let inputX = prompt('Введите первое слогаемое', 0);
let inputY = prompt('Введите первое слогаемое', 0);

let x = Number(inputX); // prompt так же, как и alert выводит строки, поэтому, если нам необходимо в дальнейшем использовать вычисление, необходимо задать данным значения тип Number 
let y = Number(inputY);

let sum = x + y;
alert(`${x} + ${y} = ${sum}`);


















