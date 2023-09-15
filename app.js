function canAccessWebsite(age) {
	if (age < 18) {
		return false;
	}
	return true;
}
// т.к. функция обязательно что-то возвращает, то после возврата значения она останавливает работу
// из-за этого в блоке условия IF можно опустить часть ELSE
// если выполнится условие, то вернется false и будет произведен выход из функции
console.log(canAccessWebsite(18));

const canAccessWebsite2 = age => (age < 18) ? 'Не допущен' : 'Допущен';
console.log(canAccessWebsite2(19));

const canAccessWebsite3 = function (age) {
	if (age < 18) {
		return false;
	}
	return true;
}
console.log(canAccessWebsite3(17));