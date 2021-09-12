var start = 1
var end = 20
var coincidences = [true] // массив "совпадений"
for (var i = start; i <= end; i++) {
    let str = "" // основная строка
    let add = "" // строка добивки пробелов
    let remainder = i % 2 // остаток от деления
    for (let j = 0; j < end - i; j++) {
        add += " "
    }
    for (let c of coincidences) {
        if (c == remainder) { // используем логику, что true = 1, false = 0
            str += "*" // тогда на месте совпадения будет *
        } else {
            str += " " // иначе между * будет пробел
        }
    }
    console.log(add + str + add) // добиваем строку слева и справа необходимыми пробелами до нужной длины
    // и обрамляем массив совпадений в значения, обратные остатку, чтобы для следующей строки в этих местах были *
    coincidences.push(!remainder)
    coincidences.unshift(!remainder)
}