const addToBasket = (productId) => {
    const cart = JSON.parse(localStorage.getItem('cart'))
    cart.positions = {
        ...cart.positions,
        [productId]: getProductFromServer(productId),
    }
    localStorage.setItem('cart', JSON.stringify(cart))
}

const getProductFromServer = (productId) => {
    return {id: productId, title: 'Шорты ' + productId, price: 1200, amount: 1, sum: 0}
}

const buttons = document.getElementsByClassName('add-button')

Array.from(buttons).forEach(button => {
    button.addEventListener('click', (e) => {
        addToBasket(e.target.dataset.id)
    })
})