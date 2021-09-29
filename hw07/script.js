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
    card.id = `card-${product.vendorCode}`

    let cardImage = document.createElement('div')
    cardImage.classList.toggle('catalog__card__image')
    cardImage.innerHTML = '<img src="img.jpg" alt="placeholder">'
    card.appendChild(cardImage)

    let cardInfo = document.createElement('div')
    cardInfo.classList.toggle('catalog__card__info')
    card.appendChild(cardInfo)

    let cardInfoText = document.createElement('div')
    cardInfoText.classList.toggle('catalog__card__info__text')
    cardInfoText.innerText = `${product.name}\n${product.price} руб.`
    cardInfo.appendChild(cardInfoText)

    let cardInfoButton = document.createElement('button')
    cardInfoButton.classList.toggle('catalog__card__info__button')
    cardInfoButton.id = `buyButton-${product.vendorCode}`
    cardInfoButton.innerText = product.isAvailable ? "Купить" : "Нет в наличии"
    cardInfoButton.disabled = !product.isAvailable // отключаем кнопку, если товар недоступен
    cardInfoButton.addEventListener('mouseup', addInCart)
    cardInfo.appendChild(cardInfoButton)

    catalog.appendChild(card)
}

var cart = document.getElementById('cart')

var cartInfoString = document.createElement('div')
cartInfoString.classList.toggle('cart__info')
cartInfoString.innerText = "Корзина пуста"
cart.appendChild(cartInfoString)

var cartContent = document.createElement('div')
cartContent.classList.toggle('cart__content')
cartContent.classList.toggle('cart__border')

var cartContentTitle = document.createElement('div')
cartContentTitle.innerText = "Состав корзины:"
cartContent.appendChild(cartContentTitle)

var cartContentBody = document.createElement('div')
cartContent.appendChild(cartContentBody)

var cartContentButton = document.createElement('button')
cartContentButton.innerText = 'Далее'
cartContentButton.addEventListener('mouseup', nextToContent)
cartContent.appendChild(cartContentButton)

cart.appendChild(cartContent)

var innerCart = {
    products: {},
    totalCost: 0,
    totalAmount: 0,
    isShown: false,

    addProduct: function (product) {
        let vCode = product.vendorCode
        if (this.products.hasOwnProperty(vCode)) {
            this.products[vCode]++
        } else {
            this.products[vCode] = 1
        }

        this.totalAmount++
        this.totalCost += product.price
        cartInfoString.innerText = `В корзине ${this.totalAmount} товаров\nна сумму ${this.totalCost} рублей`
    },

    showContent: function () {
        cartContentBody.innerHTML = ''
        let cartContentList = document.createElement('ul')
        for (let vCode in this.products) {
            if (this.products[vCode]) {
                let productInCart = document.createElement('li')
                productInCart.id = `cartContent li-${vCode}`
                let product = {}
                for (let p of catalogList) {
                    if (vCode == p.vendorCode) {
                        product = p
                        break
                    }
                }
                productInCart.innerText = `${product.name} — ${product.price} руб./ед. — ${this.products[vCode]} ед.`
                cartContentList.appendChild(productInCart)
            }
        }
        cartContentBody.appendChild(cartContentList)
        cartContent.style.display = "block"
    }
}

function addInCart(event) {
    let vendorCode = event.target.id.slice(10)
    for (let product of catalogList) {
        if (vendorCode == product.vendorCode) {
            innerCart.addProduct(product)
            break
        }
    }
    innerCart.showContent()
}

function nextToContent(event) {
    cartContent.style.display = "none"
    cartAddress.style.display = "block"
}

var cartAddress = document.createElement('div')
cartAddress.classList.toggle('cart__address')
cartAddress.classList.toggle('cart__border')

var cartAddressTitle = document.createElement('div')
cartAddressTitle.innerText = "Адрес доставки:"
cartAddress.appendChild(cartAddressTitle)

var cartAddressBody = document.createElement('div')
cartAddressBody.classList.toggle('cart__address__body')
var address = {
    city: document.createElement('input'),
    street: document.createElement('input'),
    number: document.createElement('input'),
    flat: document.createElement('input'),
    entrance: document.createElement('input'),
    floor: document.createElement('input'),
}
address.city.placeholder = 'Населённый пункт'
address.street.placeholder = 'Улица'
address.number.placeholder = 'Номер дома'
address.flat.placeholder = 'Квартира'
address.entrance.placeholder = 'Подъезд'
address.floor.placeholder = 'Этаж'
cartAddressBody.appendChild(address.city)
cartAddressBody.appendChild(address.street)
cartAddressBody.appendChild(address.number)
cartAddressBody.appendChild(address.flat)
cartAddressBody.appendChild(address.entrance)
cartAddressBody.appendChild(address.floor)
cartAddress.appendChild(cartAddressBody)

var cartAddressButton = document.createElement('button')
cartAddressButton.innerText = 'Далее'
cartAddressButton.addEventListener('mouseup', nextToAddress)
cartAddress.appendChild(cartAddressButton)

cart.appendChild(cartAddress)

function nextToAddress(event) {
    cartAddress.style.display = "none"
    cartComment.style.display = "flex"
    cartComment.style.flexDirection = "column"
}

var cartComment = document.createElement('div')
cartComment.classList.toggle('cart__comment')
cartComment.classList.toggle('cart__border')

var cartCommentTitle = document.createElement('div')
cartCommentTitle.innerText = "Комментарий:"
cartComment.appendChild(cartCommentTitle)

var cartCommentBody = document.createElement('input')
cartComment.appendChild(cartCommentBody)

var cartCommentButton = document.createElement('a')
cartCommentButton.innerText = "Подтвердить заказ"
cartCommentButton.href = "index.html"
cartCommentButton.addEventListener('mouseup', submitOrder)
cartComment.appendChild(cartCommentButton)

cart.appendChild(cartComment)

function submitOrder(event) {
    alert('Ваш заказ принят! В ближайшее время менеджер свяжется с Вами.')
}