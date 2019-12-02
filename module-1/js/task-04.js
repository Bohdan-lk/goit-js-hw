'use strict';
const pricePerDroid = 3000;
let credits = 23580;
let input = prompt('Какое количество дроидов Вы хотите купить?');

if (input === null) {
    console.log('Отменено пользователем!');
} else if (input <= 0) {
    console.log('Проверьте правильность введенных данных ');
} else {
    const totalPrice = input * pricePerDroid;

    if (totalPrice > credits) {
        console.log('Недостаточно средств на счету!');
    } else {
        console.log(`Вы купили ${input} дроидов на счету осталось ${credits - totalPrice} кредитов`);
    }
}