'use strict';

const total = 100;
const ordered = 99;

let reply;
if (total >= ordered) {
    reply = 'Заказ оформлен, с вами свяжется менеджер';
} else {
    reply = 'На складе недостаточно товаров';
}
console.log(reply);