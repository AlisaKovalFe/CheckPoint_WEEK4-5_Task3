// Напишите функцию, которая возвращает объект, составленный из
// значений вложенных массивов. Первое элемент массива - ключ, 
// второй - зачение.
// Ожидаемый результат: [['a', 1], ['b', 2]] => { a: 1, b: 2 }

const getObg = (arr) => {
    return Object.fromEntries(new Map(arr))

    //цикл
    // let result = {}
    // for (let i = 0; i < arr.length; i++) {
    //     for (let j = 0; j < arr[i].length; j = j + 2) {
    //         result[arr[i][j]] = arr[i][j + 1]
    //     }
    // }
    // return result
}

console.log(getObg([['a', 1], ['b', 2]]));

