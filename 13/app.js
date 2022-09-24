//Object
//Обращение
let user = {
  name: "admin",
  email: "admin@example.com",
  sayHello: function () {
    console.log("Hello!");
  },
};

let propName = prompt(
  "Значение какого свойства вывести - name, email, sayHello"
);

// в итоге будет обращение к свойству user["name"], user["email"], user["sayHello"]
alert(user[propName]);
// console.log(user.propName); - подобное обращение бессмысленно, так как свойства propName нет в объекте user






//array object
// вариант 1
let orders1 = [];
orders1.push({ product: "produc1", price: 10 });
orders1.push({ product: "produc2", price: 15 });
orders1.push({ product: "produc3", price: 20 });

// вариант 2
let orders2 = [];
orders2[0] = { product: "produc1", price: 10 };
orders2[1] = { product: "produc2", price: 15 };
orders2[2] = { product: "produc3", price: 20 };

// вариант 3
let orders3 = [
  { product: "produc1", price: 10 },
  { product: "produc2", price: 15 },
  { product: "produc3", price: 20 },
];

// цикл на количество элементов в массиве
for (let i = 0; i < orders3.length; ++i) {
  let order = orders3[i]; // получение одного элемента массива - объекта со свойствами product и price
  console.log(order.product);

  // console.log(orders3[i].product); // 2 вариант
}






//Магазин с прошлых уроков с обьектами
let products = [
  {
      name: "Бумага офисная А4, 80 г/м2, 500 л",
      price: 280.25,
      ordered: 0
  },
  {
      name: "Биндеры для бумаги 51 мм",
      price: 56,
      ordered: 0
  },
  {
      name: "Ручка шариковая синяя",
      price: 12.5,
      ordered: 0
  }
];

// цикл для получения количества покупаемых продуктов
for (let index = 0; index < products.length; index++) {
  const name = products[index].name;
  const price = products[index].price;

  products[index].ordered = +prompt(`Укажите количество продуктов '${name}', цена ${price}`, 0);
}

// цикл для расчета общей цены купленных продуктов
let totalPrice = 0;
for (let index = 0; index < products.length; index++) {
  totalPrice += products[index].price * products[index].ordered;
}

alert(`Сумма Вашего заказа ${totalPrice}.`);

let isFreeShipping = totalPrice > 1000;
if (isFreeShipping) 
{
  alert("Доставка будет бесплатной.");
}
