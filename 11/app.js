//function(text, repeatCount)
function showMessage() {
  alert('Hello World!');
}
showMessage();



function sum(x, y) {
  let sumResult = x + y;
  return sumResult;

  console.log('код после return не выводиться ')
}
let result2 = sum(10, 20);
console.log(result2);


//Пример работы функции
function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function mul(a, b) {
  return a * b;
}

function div(a, b) {
  return a / b;
}

let operand1 = +prompt('Введите первое число:');
let sign = prompt('Введите знак арифметической операции: + - * /');
let operand2 = +prompt('Введите первое число:');
let result;

switch(sign) {
  case '+':
    result = add(operand1, operand2);
    break;
  case '-':
    result = sub(operand1, operand2);
    break;
  case '*':
    result = mul(operand1, operand2);
    break;
  case '/':
    result = div(operand1, operand2);
    break;
  default:
    console.error(sign + 'Не является операцией');
}

if (result !== undefined) {
  console.log(`${operand1} ${sign} ${operand2} = ${result}`);
}