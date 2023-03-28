// Напишите функцию, которая создаст массив из уникальных значений, 
// которые есть в каждом из предоставленных массивов.
// Ожидаемый результат: 
// ([1, 2], [2, 3]) => [2]
// (['a', 'b'], ['b', 'c'], ['b', 'e', 'c']) => ['b']

const getUniq = (...args) => {

    //цикл и объект
    let obj = {}
    let newArr = []
    let max = 0
    let keyMax

    for (let el of args.flat(Infinity)) {
        !obj[el] ? obj[el] = 1 : obj[el]++

        if (obj[el] > max) {
            max = obj[el]
            keyMax = el
        }
    }
    newArr.push(keyMax)

    return newArr

    //цикл + метод
    // let res = []

    // for (let i = 0; i < args.length; i++) {
    //     if (Array.isArray(args[i])) {
    //         res = args[0].filter((el) => args[i].includes(el))
    //     }
    // }
    // return res.filter((el, index) => res.indexOf(el) == index)
}

console.log(getUniq([1, 2], [2, 3]));
console.log(getUniq(['a', 'b'], ['b', 'c'], ['b', 'e', 'c']));
console.log(getUniq([2, 3], [1, 2]));
console.log(getUniq(['a', 'b', 'l'], ['b'], ['c'], ['b', 'c'], ['b', 'e', 'c']));
console.log(getUniq(['a', 'b', 'b'], ['b'], ['c'], ['b', 'c'], ['b', 'e', 'c']));


