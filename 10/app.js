// shitft/unshift трудоемкие так как сдвигает все элементы, лучше использовать push/pop. 


//Массивы 
// pop/push
let cities = ['Berlin', 'London', 'Paris'];
let last = cities.pop();    //Метод который удаляет последний элемент массива и записывает его в переменную
cities.push('Lisbon')       //Метод который добавляет указанное значение в конец массива 

for(let index = 0; index < cities.length; index++) {   
  console.log(cities[index]);
}

//shift/unshift

let cities2 = ['Berlin', 'London', 'Paris'];
let first = cities2.shift(); // Удаляем первый элемент массива и записываем его в переменную
cities2.unshift('Lisbon')    // Метод который добавляет указанное значение в начало массива

for(let index = 0; index < cities.length; index++) {   
  console.log(cities[index]);
}


//splice(start deleteCount items)
//start  - индекс с которого начать удалять элементы
//deleteCount - кол-во элементов для удаления 
// items - значения для добавление в массив, вместо удаленных 

let cities3 = ['Berlin', 'London', 'Paris', 'Italy', 'Berlin'];

cities3.splice(2, 1)  // начиная с 2 индекса удалить 1 элемент
console.log(cities3)




let cities3 = ['Berlin', 'London', 'Paris', 'Italy', 'Berlin'];

cities3.splice(2, 1, 'Madrid')  // начиная с 2 индекса удалить 1 элемент и заменить на одно значение
for(const city of cities3) {
  console.log(city);
}

//slice (start end)
// slice - возвращает новый массив в который копирует элементы с start до end, не включая end
let characters = ['A', 'B', 'C', 'D', 'E'];
let arr = characters.slice(1, 3)
console.log(arr)

//concat - создает новый массив копируя данные из указанных масивов 
let characters = ['A', 'B', 'C', 'D', 'E'];
let numbers = [1, 2, 3, 4];

let values = characters.concat(numbers);
console.log(values)

//indexOf - ищет элемент с указанным значением в массиве и вовзращает его индекс, или -1
let cities4 = ['Berlin', 'London', 'Paris', 'Italy', 'Berlin'];
let index;
index = cities4.indexOf('Berlin')
console.log(index);

//split - создание массива на основе строки, используя в качестве разделители ', '

let str = 'value1, value2, value3';
let values = str.split(', ');
console.log(values);

