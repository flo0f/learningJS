/*
	Сделать объект склад с методами добавления на склад, поиска
	по складку товара и расчёт веса
*/
const warehouse = {
    goods: [],
    findGoodById: function (goodId) {
        return this.goods.find(g => g.id == goodId);
        },
    addGood: function (good) {
        const existedGood = this.findGoodById(good.id);
        if (existedGood) {
            return 'Товар уже существет';
        }
        this['goods'].push(good);
        return 'Товар успешно добавлен';
    },
    getWeightKg: function () {
        return this.goods.reduce((acc, el) => {
            current = el.weight?.kg;
            if (current != undefined) {
                acc += current;
            } else {
                acc += 0
            };
            return acc;
        }, 0)
    }
};

/* товары */
const car = {
    id: 1,
    weight: {
        kg: 1000
    },
    brand: 'Ford'
};
const chair = {
    id: 2,
    weight: {
        kg: 2
    }
};
const paper = {
	id: 3,
	color: 'red'
};

console.log(warehouse.addGood(car));
console.log(warehouse.addGood(car));
console.log(warehouse.addGood(chair));
console.log(warehouse.addGood(paper));

console.log(warehouse.findGoodById(2));
console.log(warehouse.getWeightKg());