'use strict';

const ADMIN_PASSWORD = 'jqueryismyjam';
let message;

message = prompt('Введите пароль:');

if (message === null) {
    message = 'Отменено пользователем !';
} else if (message === ADMIN_PASSWORD) {
    message = 'добро пожаловать !';
} else {
    message = 'доступ запрещен неверный пароль !';
}

alert(message);