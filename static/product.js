const addToBasket = (product) => {
    product = JSON.parse(product)
    console.log(product)
    let cart =
        JSON.parse(localStorage.getItem('cart'))
    if (cart === null) {
        cart = {
            positions: {},
        }
    }

    cart.positions = {
        ...cart.positions,
        [product.id]:
            getProductFromServer(product),
    }

    console.log(cart)
    localStorage.setItem('cart',
        JSON.stringify(cart))
}

const getProductFromServer = (product) => {
    return {
        id: product.id,
        title: product.title,
        sum: 0,
        amount: 1,
        price: product.price,
    }
}

const buttons = document.getElementsByClassName('add-button')

Array.from(buttons).forEach(button => {
    button.addEventListener('click', (e) => {
        addToBasket(e.target.dataset.product)
    })
})