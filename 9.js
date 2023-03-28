// Напишите функцию, которая разделяет массив на части заданного размера.
// Ожидаемый результат: ([1, 2, 3, 4, 5], 2) => [[1, 2], [3, 4], [5]]

const transformArr = (arr, num) => {
    let newArr = []

    for (let i = 0; i < arr.length; i = i + num) {
        newArr.push(arr.slice(i, i + num))
    }
    return newArr
}

console.log(transformArr([1, 2, 3, 4, 5], 2));