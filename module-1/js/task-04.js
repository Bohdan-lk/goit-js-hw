'use strict';
const credits = 23580;
const pricePerDroid = 3000;
let totalPrice;
let message;

const orderedSum = prompt('Какое количество дроидов вы хотите купить?');

if (orderedSum === null) {
    message = 'отменено пользователем!';
} else {
    totalPrice = pricePerDroid * orderedSum;
    if (totalPrice > credits) {
        message = 'недостаточно средств на счету!';
    } else {
        message = `вы купили ${orderedSum} дроидов  на счету осталось ${credits
        - totalPrice} кредитов.`;
    }
}

console.log(message);