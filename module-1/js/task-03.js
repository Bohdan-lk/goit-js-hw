'use strict';

let message = '';

const ADMIN_PASSWORD = 'jqueryismyjam';
const pushPassword = prompt('Ведите пароль');

if (pushPassword === null) {
    message = 'Отменено пользователем!';

    // console.log(pushPassword)

} else if (pushPassword === ADMIN_PASSWORD) {
    message = 'Добро пожаловать!';

    // console.log(pushPassword)

} else {
    message = 'Доступ запрещен, неверный пароль!';

    // console.log(pushPassword)
}

alert(message);
console.log(message);
