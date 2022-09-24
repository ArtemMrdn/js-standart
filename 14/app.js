//for in 
let user1 = {
    login: "admin",
    email: "admin@example.com",
    created: "15.05.2019"
};

// цикл for...in используется для перебора всех ключей (свойств), которые есть в объекте 
for (const key in user1) {
    console.log(`Свойство ${key} значение ${user1[key]}`);
}


//Пример магазина 
function createProduct(name, price) {
    return {
        name,
        price,
        ordered: 0,
        calculateTotal() {
            return this.price * this.ordered;
        }
    }
}

let products = [
    createProduct("Бумага офисная А4, 80 г/м2, 500 л", 280.25),
    createProduct("Биндеры для бумаги 51 мм", 56),
    createProduct("Ручка шариковая синяя", 12.5)
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
    totalPrice += products[index].calculateTotal();
}

alert(`Сумма Вашего заказа ${totalPrice}.`);

let isFreeShipping = totalPrice > 1000;
if (isFreeShipping) 
{
    alert("Доставка будет бесплатной.");
}