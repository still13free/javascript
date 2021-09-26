/* Примерный вариант сущности Product
var Product = {
    image: "url"
    name: "",
    description: "",
    vendorCode: "",
    price: 0,
    isAvailable: false,
    amountInStock: 0,
    onSale: false,
    discount: 0.0,
} */

var catalogList = [
    {
        name: "Магнит",
        vendorCode: "13001",
        price: 99,
        isAvailable: true,
    },
    {
        name: "Кружка",
        vendorCode: "13002",
        price: 249,
        isAvailable: true,
    },
    {
        name: "Фоторамка",
        vendorCode: "13207",
        price: 199,
        isAvailable: true,
    },
    {
        name: "Брелок",
        vendorCode: "13523",
        price: 119,
        isAvailable: true,
    },
    {
        name: "Шар с миниатюрой",
        vendorCode: "13996",
        price: 379,
        isAvailable: true,
    },
    {
        name: "Стикерпак",
        vendorCode: "13701",
        price: 229,
        isAvailable: true,
    },
    {
        name: "Браслет",
        vendorCode: "13456",
        price: 79,
        isAvailable: true,
    },
]

var catalog = document.getElementById('catalog')
for (let product of catalogList) {
    product.isAvailable = (Math.random() < 0.7) // внесём немного случайности в каталог

    let card = document.createElement('div')
    card.classList.toggle('catalog__card')
    card.innerText = `\n${product.name}\nЦена: ${product.price} руб.\n\nВ наличии:\n${product.isAvailable ? "есть" : "временно отсутствует"}\n`
    card.innerHTML = '<img src="img.jpg" alt="placeholder">' + card.innerHTML

    let buyButton = document.createElement('button')
    buyButton.innerText = 'Купить'
    buyButton.id = `buyButton-${product.vendorCode}`
    buyButton.disabled = !product.isAvailable // отключаем кнопку, если товар недоступен
    buyButton.addEventListener('mouseup', addInCart)

    card.appendChild(buyButton)
    catalog.appendChild(card)
}

var dynamic_cart = document.getElementById("cart")
var cart = {
    products: [],
    totalCost: 0,
    totalAmount: 0,
    infoString: document.createElement('p'),
    productsList: document.createElement('ol'),

    addProduct: function (product) {
        this.products.push(product)
        this.totalAmount++
        this.totalCost += product.price
        this.infoString.innerText = `В корзине ${this.totalAmount} товаров\nна сумму ${this.totalCost} рублей`
        let newProduct = document.createElement('li')
        newProduct.innerText = `${product.name} — ${product.price} рублей`
        this.productsList.appendChild(newProduct)
    },
}
cart.infoString.innerText = "Корзина пуста"
dynamic_cart.appendChild(cart.infoString)
dynamic_cart.appendChild(cart.productsList)

function addInCart(event) {
    let vendorCode = event.target.id.slice(10)
    for (let product of catalogList) {
        if (vendorCode == product.vendorCode) {
            cart.addProduct(product)
            break
        }
    }
}