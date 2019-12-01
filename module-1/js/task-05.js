const australia = 170;
const jamaica = 120;
const india = 80;
let costTransition;
let inputCountry = prompt('Страна доставки.');
if (inputCountry === null) {
    alert('Отменено пользователем!');
} else {
    switch (inputCountry.toLowerCase()) {
        case 'китай':
            costTransition = china;
            alert(
                `Доставка в ${inputCountry.toLowerCase()} будет стоить ${costTransition} кредитов`,
            );
            break;
        case 'чили':
            costTransition = chile;
            alert(
                `Доставка в ${inputCountry.toLowerCase()} будет стоить ${costTransition} кредитов`,
            );
            break;
        case 'австралия':
            costTransition = australia;
            alert(
                `Доставка в ${inputCountry.toLowerCase()} будет стоить ${costTransition} кредитов`,
            );
            break;
        case 'индия':
            costTransition = india;
            alert(
                `Доставка в ${inputCountry.toLowerCase()} будет стоить ${costTransition} кредитов`,
            );
            break;
        case 'ямайка':
            costTransition = jamaica;
            alert(
                `Доставка в ${inputCountry.toLowerCase()} будет стоить ${costTransition} кредитов`,
            );
            break;
        default:alert('В вашей стране доставка не доступна');
    }
}