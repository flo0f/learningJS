/* Замаскировать всё, кроме последних 4х символов */
const card = '2342834503458353';
/* ************8353 */
const maskedCard = card.slice(-4).padStart(card.length, '*');
console.log(maskedCard);