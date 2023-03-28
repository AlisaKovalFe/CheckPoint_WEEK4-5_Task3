// Заполните массив следующим образом: в первый элемент запишите '1', 
// во второй '22', в третий '333' и так далее.

const filArr = (quantity) => {
    let arr = []
    let str = ''

    for (let i = 1; i <= quantity; i++) {
        str += 1
        let result = i * str
        arr.push(String(result)) // насколько поняла в массиве должны быть именно строки
    }
    return arr
}

console.log(filArr(5));

