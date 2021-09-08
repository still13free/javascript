// Задание 3
var a = Number(prompt("Введите целое число 'a'"))
var b = Number(prompt("Введите целое число 'b'"))
if (a >= 0 && b >= 0) {
    console.log(`a(${a}) - b(${b}) = ${a - b}`)
} else if (a < 0 && b < 0) {
    console.log(`a(${a}) * b(${b}) = ${a * b}`)
} else {
    console.log(`a(${a}) + b(${b}) = ${a + b}`)
}