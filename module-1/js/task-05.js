'use strict';

const deliveryToChina = 100;
const deliveryToChile = 250;
const deliveryToAustralia = 170;
const deliveryToIndia = 80;
const deliveryToJamaica = 120;
let input;

input = prompt('Укажите страну доставки:');

if (input === null || input === '') {

} else {

    switch (input.toLowerCase()) {
        case 'китай' :
            console.log(`Доставка в Китай будет стоить ${deliveryToChina}`);
            break;
        case 'чили' :
            console.log(`Доставка в Чили будет стоить ${deliveryToChile}`);
            break;
        case 'австралия' :
            console.log(`Доставка в Австралию будет стоить ${deliveryToAustralia}`);
            break;
        case 'индия' :
            console.log(`Доставка в Индию будет стоить ${deliveryToIndia}`);
            break;
        case 'ямайка' :
            console.log(`Доставка в Ямайку будет стоить ${deliveryToJamaica}`);
            break;
        default:
            console.log('В вашей стране доставка не доступна');
    }
}