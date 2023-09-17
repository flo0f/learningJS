const roles = ['user', 'admin', 'manager', 'superuser'];

// .split() разбивает строку по знаку из () возвращая массив
const url = 'auth/user/login';
const res = url.split('/');
console.log(res);

// преобразование массива в строку
// .join() объединяет элементы массива в строку, знак из () является разделителем
console.log(roles.join('='));