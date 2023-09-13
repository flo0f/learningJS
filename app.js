/*
	Пользователь хочет приобрести игру в магазине
	Он может это сделать отлько если:
	- Eго баланс больше 1000 (balance) 
	или число бонусов больше 100 (bonusBalance)
	- Он не забанен (isBanned)
	- Игра не кулена (isExist)
	- Игра в продаже (isSelling)
	Напишите условие для покупки и выведите в консоль
	результат
*/
const user = 'gamer1337';
const balance = 1200;
const bonusBalance = 90;
const isBanned = false;

const isBought = false;
const isSelling = true;

const canBuy = (balance > 1000 || bonusBalance > 100) && !isBanned && !isBought && isSelling;

console.log(`Пользователь ${user} сможет купить игру?
Ответ: ${canBuy ? 'ДА' : 'НЕТ'}`);