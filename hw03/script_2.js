function countCartPrice(cart_arr) {
    var total_price = 0
    for (let product of cart_arr) {
        total_price += product[1]
    }
    return total_price
}

var cart = []
while (true) {
    let name = prompt("Введите название товара")
    let price = Number(prompt("Введите стоимость товара"))
    if (name == "" || price < 0) {
        break
    }
    cart.push([name, price,])
}

console.log(cart)
console.log(countCartPrice(cart))