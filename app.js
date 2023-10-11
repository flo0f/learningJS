const cities = {
    msk: {
        temp: {
            celsius: 25
        }
    },
    spb: {

    }
};
const city = 'spb';
if (cities[city] != undefined && cities[city].temp != undefined) {
    console.log(cities[city].temp.celsius);
};
console.log(cities[city]?.temp?.celsius);
// [city]?. такой город есть? - если да -> дальше, если нет -> undefined
// temp?. температура есть? - если да -> дальше, если нет -> undefined