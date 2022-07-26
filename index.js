// 2 Напишите функцию для поверхностного сравнения двух объектов
const shallowEquals = (obj1, obj2) => {
    const firstObj = Object.keys(obj1).length
    const secondObj = Object.keys(obj2).length
    if (firstObj !== secondObj) {
            return false
    } else {
        for (let key in obj1) { 
            if (obj1[key] !== obj2[key]) {
                return false;
            }
        }
        return true
    }
}

shallowEquals({ a: 1, b: "2" }, { a: 1, b: "2" })
shallowEquals({a: 0}, {a: undefined})
shallowEquals({a: {}}, {a: {}})
shallowEquals({a: []}, {a: []})
shallowEquals({a: () => {}}, {a: () => {}})

// 3) Напишите функцию, которая будет устанавливать значение в объекте, по переданному пути.

function pathGen (path, value, obj) {
    path.reduce((prevValue, currentValue, index) => {
        if (index === path.length - 1) {
            prevValue[currentValue] = value
            return prevValue;
        }
        if (prevValue[currentValue]) {
            return prevValue[currentValue]
        }
        prevValue[currentValue] = {};
        return prevValue[currentValue];
    }, obj )
    return obj;
}

const obj = {};

pathGen(['user', 'name'], 'Sam', obj);

// 4) Реализуйте, на выбор, один из методов массива: map, sort, filter.

function map(array, callback) {
    const transformArray = []
    array.forEach(el => transformArray.push(callback(el)))
    return transformArray;
}

map(['1', '2'], (el) => Number(el))

// 5) Реализуйте функцию pipe.

function pipe (...args) {
    return function (value) {
        return args.reduce((prev, current) => {
            return current(prev)
     }, value)
    }
}

const fillUser = pipe(  (user) => ({ ...user, lastName: "Pass" }),
    (user) => ({ ...user, age: 29 }),
    (user) => ({ ...user, city: "Boston" }));

fillUser({name: 'Sam'});

// 6) Напишите функцию для поиска значения в n-арном дереве.

const tree = {
    node: 1,
    children: [
        {
            node: 2,
            children: [
                {
                    node: 3,
                    children: [
                        {
                            node: 4,
                            children: [
                                {
                                    node: 5,
                                    children: [],
                                },
                                {
                                    node: 6,
                                    children: [],
                                },
                                {
                                    node: 7,
                                    children: [],
                                },
                                {
                                    node: 8,
                                    children: [],
                                },
                            ],
                        },
                        {
                            node: 9,
                            children: [],
                        },
                    ],
                },
            ],
        },
        {
            node: 10,
            children: [
                {
                    node: 11,
                    children: [
                        {
                            node: 12,
                            children: [],
                        },
                    ],
                },
                {
                    node: 13,
                    children: [],
                },
                {
                    node: 14,
                    children: [],
                },
            ],
        },
    ],
};

let val;
function findNodes(value, someTree) {
    Object.values(someTree).forEach(el => {
        if (el === value) {
            val = el;
        } else if (Array.isArray(el) && el.length > 0) {
            el.forEach(item => {
                findNodes(value, item)
            })
        }
    })
    if (val === value) {
        return val
    } else {
        return -1
    }
}

console.log(findNodes(11, tree));
