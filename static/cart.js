const increment = (cart, idPosition) => {
    cart.positions[idPosition].amount += 1
    render(cart)
}
const decrement = (cart, idPosition) => {
    cart.positions[idPosition].amount && (cart.positions[idPosition].amount -= 1)
    render(cart)
}

const cart = JSON.parse(localStorage.getItem('cart'))
console.log(cart)
// const cart = {
//     deliveryPrice: 120,
//     deliveryMethod: 'post',
//     positions: {
//         1: {id: 1, title: 'Шорты 2', price: 1200, amount: 2, sum: 0},
//         3: {id: 3, title: 'Шорты 3', price: 1200, amount: 3, sum: 0},
//         4: {id: 4, title: 'Шорты 4', price: 1200, amount: 1, sum: 0},
//     }
// }

const arrayFromObject = obj => Object.keys(obj).map(key => obj[key])

// function arrayFromObject(obj) {
//     const array = Object.keys(obj)
//     // [1, 3, 4]
//
//     const n = array.length
//     // 3
//     for (let i = 0; i < n; i++) {
//         array[i] = obj[array[i]]
//         // 1: array[0] = obj[1] {id: 1, title: 'Шорты 2', price: 1200, amount: 2, sum: 0}
//         // 2: array[1] = obj[3] {id: 3, title: 'Шорты 3', price: 1200, amount: 3, sum: 0}
//         // 3: array[2] = obj[4] {id: 4, title: 'Шорты 4', price: 1200, amount: 1, sum: 0}
//     }
//     // [{id: 1, title: 'Шорты 2', price: 1200, amount: 2, sum: 0},
//     //  {id: 3, title: 'Шорты 3', price: 1200, amount: 3, sum: 0},
//     //  {id: 4, title: 'Шорты 4', price: 1200, amount: 1, sum: 0},
//     // ]
// }

const generateCartTable = (cart) => {
    const trs = arrayFromObject(cart.positions).map(position => {
        position.sum = position.price * position.amount

        return `
        <tr class="cart-position" id="${position.id}">
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

    const totalSum = arrayFromObject(cart.positions).reduce((sum, position) => sum + position.sum, 0)

    const totalTr = `
        <tr>
            <td colspan="3"></td>
            <td class="total">${totalSum}</td>
        </tr>`

    const table = document.createElement('table')
    table.innerHTML = trs + totalTr

    Array.from(table.querySelectorAll('button')).forEach(button => {
        const id = button.closest('.cart-position').id
        button.addEventListener('click', () => button.className === 'plus-button'
            ? increment(cart, id)
            : decrement(cart, id)
        )
    })

    return table
}

const render = (cart) => {
    const cartDiv = document.getElementById('cart')
    const table = cartDiv.querySelector('table')
    table && cartDiv.removeChild(table)
    cartDiv.appendChild(generateCartTable(cart))
}

render(cart)

/*

# - id
. - class
[name="name"] - attributes
tag - tags

 */



















