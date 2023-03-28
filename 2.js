// Дан массив с числами. Узнайте сколько элементов с начала массива 
// надо сложить, чтобы в сумме получилось больше 10-ти.

const sum = (arr, num) => {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]

        if (sum > num) {
            return i + 1
        }
    }
}

console.log(sum([1, 9, 5, 3, 6, 1, 9], 10));

