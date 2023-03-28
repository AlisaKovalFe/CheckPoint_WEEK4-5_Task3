// Напишите функцию, которая преобразует глубокий массив в одномерный.
// Задачу нужно решить двумя способами!
// Ожидаемый результат: [1, 2, [3, 4, [5]]] => [1, 2, 3, 4, 5]

const flatArr = (arr) => {
    return arr.flat(Infinity)




    //не универсал метод
    // let newArr = []

    // for (let i = 0; i < arr.length; i++) {

    //     if (typeof arr[i] !== 'object') {
    //         newArr.push(arr[i])
    //     }

    //     if (Array.isArray(arr[i])) {
    //         for (let j = 0; j < arr[i].length; j++) {
    //             if (typeof arr[i][j] !== 'object') {

    //                 newArr.push(arr[i][j])
    //             }

    //             if (Array.isArray(arr[i][j])) {
    //                 for (let k = 0; k < arr[i][j].length; k++) {
    //                     newArr.push(arr[i][j][k])
    //                 }
    //             }
    //         }

    //     }
    // }
    // return newArr

}



console.log(flatArr([1, 2, [3, 4, [5]]]));