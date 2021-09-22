/* Примерный вариант сущности Product в "финальном" варианте
для простоты создания массива оставим наиболее необходимое
var Product = {
    name: "",
    description: "",
    vendorCode: "",
    price: 0,
    isAvailable: false,
    amountInStock: 0,
    onSale: false,
    discount: 0.0,
} */

var storage = []
storage.push(
    { name: "Магнит", price: 99, isAvailable: true },
    { name: "Кружка", price: 249, isAvailable: true },
    { name: "Фоторамка", price: 199, isAvailable: false },
    { name: "Брелок", price: 119, isAvailable: true },
    { name: "Шар с миниатюрой", price: 379, isAvailable: false },
    { name: "Стикерпак", price: 229, isAvailable: false },
    { name: "Браслет", price: 79, isAvailable: true },
)

var catalog = document.getElementById('catalog')
catalog.style.display = 'flex'
catalog.style.justifyContent = 'center'

for (let product of storage) {
    let card = document.createElement('div')
    card.className = 'catalog-card'
    card.style.height = "100px"
    card.style.width = "150px"
    card.style.boxSizing = "border-box"
    card.style.border = "1px solid #000"
    card.style.margin = "5px"
    card.innerText = `${product.name}\nЦена: ${product.price}\nВ наличии: ${product.isAvailable ? "есть" : "временно отсутствует"}`
    catalog.appendChild(card)
}