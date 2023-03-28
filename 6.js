// Напишите функцию, которая убирает повторяющиеся значения.
// Ожидаемый результат: [1, 2, 3, 1, 2] => [1, 2, 3]

const delDubl = (arr) => {

    //цикл
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i]) == i) {
            newArr.push(arr[i])
        }
    }
    return newArr

    //метод
    // return arr.filter((el, index) => arr.indexOf(el) == index)

    //Set
    // return [...new Set(arr)]
}

console.log(delDubl([1, 2, 3, 1, 2]));
console.log(delDubl([1, 2, 3, 1, 2, 2, 1, 3, 4]));