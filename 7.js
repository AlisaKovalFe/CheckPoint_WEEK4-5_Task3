// Напишите функцию, которая сравнивает два массива и возвращает true,
// если они идентичны.
// Ожидаемый результат: 
// ([1, 2, 3], [1, 2, 3]) => true
// ([1, 2, 3], [1, 2, 3, 4]) => false

const compareArr = (arr1, arr2) => {

    //цикл
    let resultCompare = false
    for (let i = 0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i]) && arr1.length == arr2.length) {
            return resultCompare = true
        }
    }
    return resultCompare

    //метод
    // return arr1.every((el) => arr2.includes(el) && arr1.length == arr2.length)


    // Set!!!!!!!!
    // let set1 = new Set(arr1)
    // let set2 = new Set(arr2)
    // return set1.values() == set2.values() ? true : false // некорректно работает, это потому что любой set уникален? проверить
}

console.log(compareArr([1, 2, 3], [1, 2, 3]));
console.log(compareArr([1, 2, 3], [1, 2, 3, 4]));
console.log(compareArr([1, 2, 3], [1, 2]));