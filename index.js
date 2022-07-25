// 1 Напишите функцию для поверхностного сравнения двух объектов
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

console.log(shallowEquals({ a: 1, b: "2" }, { a: 1, b: "2" }));
console.log(shallowEquals({a: 0}, {a: undefined}));
console.log(shallowEquals({a: {}}, {a: {}}));
console.log(shallowEquals({a: []}, {a: []}));
console.log(shallowEquals({a: () => {}}, {a: () => {}}));

// 2) Напишите функцию, которая будет устанавливать значение в объекте, по переданному пути.

function addPropertiesAndValue(arr, value, obj) {
    arr.reduce((a, b) => {
        a[b] = {}
        console.log(a, b)
        return a
    }, obj)
}

let obj = {};

addPropertiesAndValue(['path', 'name'], 'Sam', obj);