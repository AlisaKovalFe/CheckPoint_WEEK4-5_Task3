// Напишите функцию, которая очищает массив от нежелательных значений, 
// таких как false, undefined, пустые строки, ноль, null.
// Ожидаемый результат: 
// [0, 1, false, 2, undefined, '', 3, null] => [1, 2, 3]

const clearFalsy = (arr) => {
    //метод
    return arr.filter((el) => Boolean(el) != false)

    //цикл
    // let newArr = []
    // for (let i = 0; i < arr.length; i++) {
    //     if (Boolean(arr[i]) != false) {
    //         newArr.push(arr[i])
    //     }
    // }
    // return newArr
}

console.log(clearFalsy([0, 1, false, 2, undefined, '', 3, null]));