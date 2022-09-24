//Виды

// функция-объявление
function add(a, b) {
  let temp = a + b;
  return temp;
}
result = add(1, 2);

// именованная функция-выражение
let add1 = function add(a, b) {
  return a + b;
};
result = add1(10, 20);

// функция-выражение или анонимная функция
let add2 = function (a, b) {
  return a + b;
};
result = add2(100, 200);

// стрелочная функция (arrow fucntion)
let add3 = (a, b) => {
  return a + b;
};
result = add3(1000, 2000);

// Рекурсия - вызов функции из этой же функции.
function test(counter) {
  counter--;
  console.log("part 1 - " + counter);

  if (counter != 0) {
    test(counter);
  }

  console.log("part 2 - " + counter);
}
test(3);

//callback

function myFilter(fn) {
  let data = [1, 3, 5, 7, 8, 88, 1, 53, 6, 2, 3, 1, 7, 88, 9, 16];
  let result = [];

  for (let i = 0; i < data.length; i++) {
    // запуск функции fn и передача значение data[i]
    // если функция вернет true для значения data[i], то оно будет добавлено в массив result;
    // fn - функция обратного вызова или callback функция
    // эта функция позволяет сделать myFilter максимально гибкой и увеличить возможность повторного использования
    if (fn(data[i]) === true) {
      result.push(data[i]);
    }
  }

  return result;
}

// возвращает true, если значение x больше 10
let greaterThan10 = function (x) {
  return x > 10;
};

function equal1(x) {
  return x === 1;
}

console.log(myFilter(equal1)); // получение массива со значениями, равынми 1

// myFilter(greaterThan10) - вызываем функцию myFilter и передаем в качестве параметра функцию greaterThan10, которая будет использоваться
// как функция обратного вызова. В результате такого вызова myFilter вернет новый массив со значениями больше 10.
// При передаче функции как параметра не используются круглые скобки greaterThan10(), а только имя greaterThan10. Круглые скобки указывают
// на то, что мы запускаем функцию, а в данном случае нам необходимо передать функцию как значение, чтобы запуск произошел из myFilter, то есть
// чтобы произошел обратный вызов функции.
console.log(myFilter(greaterThan10));

// Когда callback функция используется разово и содержит небольшое количество кода, нет смысла опрделять её как отдельную функцию.
// В таких случаях часто используются анонимные функции или стрелочные функции.
console.log(
  myFilter(function (x) {
    return x < 5;
  })
); // использование анонимной функции
console.log(myFilter((x) => x < 5)); // использование стрелочной функций
