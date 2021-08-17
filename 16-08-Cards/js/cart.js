const table = document.createElement('table')

const createTable = (good, tbody) => {
    tbody.innerHTML += `<tr><td>${good.title}</td><td>€ ${good.price}</td><td>${good.quantity}</td><td>€ ${good.price*good.quantity}</td></tr>`
    return tbody
}

const createTotal = (goods) => {
    const culcSum = document.createElement('div')
    culcSum.classList.add('total')
    culcSum.innerHTML = `TOTAL: € ${countPrice(goods)}`
    return culcSum
}

const countPrice = (array) => {
    let sum = 0;
    for(let item of array){
        const price = item.price * item.quantity
        sum+=price;
    }
    return sum
}