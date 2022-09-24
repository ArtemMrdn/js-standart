//циклы
//while, выполняется до тех пор, пока тело цикла истинно. Одно выполнения цикла называют ИТЕРАЦИЕЙ.
let i = 0;

console.log("Начало цикла");
while (i < 10) {
  i++;
  console.log("Итерация №" + i);
}
console.log("Конец цикла");

// do while работает так же, как и while, но вначале выполняет итерацию
let x = 0;
do {
  i++;
  console.log("Итерация №" + x);
} while (x < 10);

//for позволяет запустить цикл на указанное кол-во итераций
for (let y = 0; y < 10; y++) {
  console.log("iteration#" + y);
}

//Пример

let sum = 0;
while(true) {
  let value = prompt('Введите число. Для выхода напишите exit');
  if (value == 'exit') {
    break; //остановить работу цикла
  }
  
  let convertedValue = Number(value);
  if (isNaN(convertedValue)) {
    continue; //перейти на следующую итерацию
  }
  sum += convertedValue;
}
alert(`Сумма чисел ${sum}`);