// Напишите функцию, возвращает новый массив без предоставленных значений.
// Ожидаемый результат: [1, 2, 3, 1, 2] без 1, 2 => [3]


const getArr = (arr, ...args) => {
    //цикл
    let newArr = []

    for (let i = 0; i < arr.length; i++) {
        if (!args.includes(arr[i])) {
            newArr.push(arr[i])
        }
    }
    return newArr

    //метод
    // return arr.filter((el) => !args.includes(el))

    //Set (на память себе оставлю)
    // let set2 = new Set(args)
    // return arr.filter((el) => !set2.has(el))

}

console.log(getArr([1, 2, 3, 1, 2], 1, 2));



