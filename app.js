// switch statement
const role = 'manager';

if (role === 'manager') {
    console.log('Менеджер');
} else if (role === 'admin') {
    console.log('Админ');
} else if (role === 'seo') {
    console.log('СЕО');
} else {
    console.log('Неизвестная роль');
}
// реализация такого же блока с помощью switch statement
switch (role) {
    case 'manager': // role === 'manager'
        console.log('Менеджер');
        break;
    case 'admin': // role === 'admin'
        console.log('Админ');
        break;
    case 'seo': // role === 'seo'
        console.log('СЕО');
        break;
    default: // else {...}
        console.log('Неизвестная роль');
}
// первое или второе, то ...
switch (role) {
    case 'manager':
    case 'admin':
        console.log('Не руководитель');     // Если role === 'admin' ИЛИ 'manager'
        break;                              // То 'не руководитель'
    case 'seo':                             // Блок админа/менеджера не выполнится, если
        console.log('Руководитель');        // role !== 'admin' ИЛИ 'manager'
        break;                              // блок сео выполнится, только если
    default:                                // role === 'seo'
        console.log('Неизвестная роль');
}

const num = 1;

switch (true) {
    case num > 0: // операторы сравнения выдают булевое значение, следовательно эта запись
        console.log('Положительный');   // соответствует true === num > 0
        break;
    case num < 0: // true === num < 0
        console.log('Отрицательный');
        break;
    default: // в любом другом случае будет выполняться этот блок
        console.log('Ноль!')
}