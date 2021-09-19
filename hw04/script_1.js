function GetObject(number) {
    if (number > 999) {
        console.log("Переданное число больше 999!")
        return {}
    }

    let units = number % 10
    let dozens = Math.floor(Math.floor(number % 100) / 10)
    let hundreds = Math.floor(number / 100)
    return { 'units': units, 'dozens': dozens, 'hundreds': hundreds }
}

let num = Number(prompt('Введите число от 0 до 999'))
console.log(num, GetObject(num))