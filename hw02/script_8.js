function power(val, pow) {
    if (pow == 0) {
        return 1
    }
    if (pow > 0) {
        return val * power(val, pow - 1)
    }
    return 1 / val * power(val, pow + 1)
}

var v = Number(prompt("Введите число для возведения в степень"))
var p = Number(prompt("Введите целое число степени возведения"))
console.log(power(v, p))