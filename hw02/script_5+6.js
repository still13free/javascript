//Задание 5
function MyAddition(a, b) {
    return a + b
}

function MySubtraction(a, b) {
    return a - b
}

function MyMultiplication(a, b) {
    return a * b
}

function MyDivision(a, b) {
    return a / b
}

//Задание 6
function MathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "+":
            console.log(MyAddition(arg1, arg2))
            break
        case "-":
            console.log(MySubtraction(arg1, arg2))
            break
        case "*":
            console.log(MyMultiplication(arg1, arg2))
            break
        case "/":
            console.log(MyDivision(arg1, arg2))
            break
        default:
            console.log("Некорректная операция")
    }
}

var a = Number(prompt("Введите число 'a'"))
var b = Number(prompt("Введите число 'b'"))
var o = prompt("Введите операцию (+, -, *, /)")
MathOperation(a, b, o)