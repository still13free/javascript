var dynamic_cart = document.createElement('div')
dynamic_cart.innerText = "Корзина пуста"
let divcart = document.getElementById("cart")
divcart.appendChild(dynamic_cart)

var cart = {
    products: [],
    totalCost: 0,
    totalAmount: 0,
    isListShown: false,

    addProduct: function (product, amount) { // пример вызова cart.addProduct({name: "", price: 0}, 0)
        this.products.push({
            product: product,
            amount: amount,
        })
        this.totalCost += product.price * amount
        this.totalAmount += amount

        dynamic_cart.innerText = `В корзине ${this.totalAmount} товаров на сумму ${this.totalCost} рублей`

        if (this.isListShown) {
            let newLi = document.createElement('li')
            newLi.innerText = `"${product.name}" по цене ${product.price} рублей в количестве ${amount} ед.`
            var list = document.getElementById('productsList')
            list.appendChild(newLi)
        }
    },

    showProductsList: function () {
        if (!this.isListShown) {
            var productsList = document.createElement('ol')
            productsList.id = "productsList"
            for (let p of this.products) {
                let newLi = document.createElement('li')
                newLi.innerText = `"${p.product.name}" по цене ${p.product.price} рублей в количестве ${p.amount} ед.`
                productsList.appendChild(newLi)
            }
            document.body.appendChild(productsList)
            this.isListShown = true
        }
    },
}

/*
cart.addProduct({ name: "Кружка", price: 150 }, 3)
cart.addProduct({ name: "Сок", price: 90 }, 1)
cart.addProduct({ name: "Графин", price: 499 }, 1)
cart.addProduct({ name: "Шоколад", price: 59 }, 7)
cart.showProductsList()
cart.addProduct({ name: "Булочка", price: 24 }, 3)
*/