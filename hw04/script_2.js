var cart = {
    products: [],
    total: 0,

    addProduct: function () { // name и price в будущем должны перекочевать в аргумент метода в качестве объекта product
        this.products.push({
            name: prompt("Введите название товара"),
            price: Number(prompt("Введите цену за 1 ед. товара")),
            amount: Number(prompt("Введите количество ед. товара")), // количество будет вторым аргументом
        })
    },

    countTotalCost: function () {
        this.total = 0
        for (let product of this.products) {
            this.total += product.price * product.amount
        }
        console.log(`Всего товаров в корзине на сумму ${this.total}`)
    },

    showProductsList: function () {
        for (let product of this.products) {
            console.log(`"${product.name}" по цене ${product.price} в количестве ${product.amount}`)
        }
    }
}