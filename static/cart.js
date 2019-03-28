const decrement = a => parseInt(a) ? a - 1 : 0
const increment = a => parseInt(a) + 1

const cart = {
    deliveryPrice: 120,
    deliveryMethod: 'post',
    positions: [
        {id: 1, title: 'Шорты 2', price: 1200, amount: 2, sum: 0},
        {id: 3, title: 'Шорты 3', price: 1200, amount: 3, sum: 0},
        {id: 4, title: 'Шорты 4', price: 1200, amount: 1, sum: 0},
    ]
}

const generateCartTable = (cart) => {
    const priceTd = document.createElement('td')
    priceTd.innerHTML = '100'

    const trs = cart.positions.map(position => {
        position.sum = position.price * position.amount

        return `
        <tr class="cart-position">
            <td>${position.title}</td>
            <td class="price">${position.price}</td>
            <td>
                <button class="minus-button">-</button>
                <input type="text" value="${position.amount}" class="amount">
                <button class="plus-button">+</button>
            </td>
            <td class="sum">${position.sum}</td>
        </tr>
        `
    })

    const totalTr = `
        <tr>
            <td colspan="3"></td>
            <td class="total">0</td>
        </tr>`

    return `<table>${trs}${totalTr}</table>`
}

/*

# - id
. - class
[name="name"] - attributes
tag - tags

 */



















