/*
    преобразовать пользователей до вида
    { fullName: 'Вася Пупкин', skillNum: 2}

*/

const users = [
    {
        name: 'Вася',
        surname: 'Пупкин',
        age: 30,
        skills: ['Разработка', 'DevOps']
    },
    {
        name: 'Катя',
        surname: 'Белова',
        age: 18,
        skills: ['Дизайн']
    }
];
const res = users.map((a, i) => {
    return {
        fullName: a.name + ' ' + a.surname,
        skillNum: a.skills.length
    }
});
console.log(res)

// из урока
const userData = users.map(user => {
    return {
        fullName: `${user.name} ${user.surname}`,
        skillNum: user.skills.length
    };
})
console.log('---');
console.log(userData);