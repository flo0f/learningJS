/*
    Дан произвольный url -
    'https://purpleschool.ru/course/javascript'
    Нужно сделать функцию, которая выводит в консоль:
    - Протокол (https)
    - Доменное имя (purpleschool.ru)
    - Путь внутри сайта (/course/javascript)
*/

const url = 'https://purpleschool.ru/course/javascript';
/*
МОЯ РЕАЛИЗАЦИЯ

function getUrlPart(url) {
    const [protocol, _, host, ...path] = url.split('/');
    console.log(`Протокол: ${protocol.slice(0, -1)}.
Домен: ${host}
Путь: ${'/' + path.join('/')}`)
}

*/

// реализация из видео
function getUrlParts(url) {
    const [protocol, _, host, ...path] = url.split('/');
    if (protocol === 'https:' || protocol === 'http:') {
        if (!host.includes('.')) {
            return;
        }
        console.log(protocol, host, path);
        console.log(`Протокол: ${protocol.split(':')[0]}`);
        console.log(`Доменное имя: ${host}`);
        console.log(`Путь внутри сайта: /${path.join('/')}`);
    }
}

getUrlParts(url);