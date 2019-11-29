'use strict';

let credits = 23580;
let pricePerDroid = 3000;
const toBuyDroid = prompt(
    'количество дроидов которое вы хотите преобрести'
);
// console.log(toBuyDroid);

let message;
// console.log(message)

if (toBuyDroid === null) {
    message = 'Отменено пользователем!';
} else if  (isNaN(toBuyDroid))  {
    message = 'Введите число!';
} else {
    const totalPrice = pricePerDroid * toBuyDroid;
    if (totalPrice > credits) {
        message = 'Недостаточно средств на счету!';
    } else {
        const sum = credits - pricePerDroid * toBuyDroid;
        message = `Вы купили ${toBuyDroid} дроидов, на счету осталось ${sum} кредитов `
    }
}

console.log(message);

