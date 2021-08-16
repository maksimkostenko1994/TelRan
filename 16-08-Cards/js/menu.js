const btnHome = document.querySelector('#homeBtn'),
    btnCart = document.querySelector('#cartBtn')

let objArray  = getObjects();

function getObjects() {
    const itemsObject = [];
    const items = document.querySelectorAll('.item')
    for (let item of items)
        itemsObject.push(item)
    return itemsObject;
}

btnHome.onclick = () => {
    root.style.display = 'grid'
    root.innerHTML = ''
    btnHome.classList.add('active')
    btnCart.classList.remove('active')
    for (let item of goods) {
        root.append(createElement(item))
    }
    objArray = getObjects();
    objArray.forEach(item => item.querySelector('.btn').onclick = (event) => {
        const obj = goods.filter(el => objArray.indexOf(item) === goods.indexOf(el))[0];
        obj.quantity++
        const price = obj.quantity * obj.price;
        item.querySelector('p').innerHTML = `Price: € ${price}`
    })
}

btnCart.onclick = () => {
    root.style.display = 'block'
    root.innerHTML = ''
    table.innerText = ''
    table.innerHTML = `<thead><tr><th scope="col">Title</th><th scope="col">price</th><th scope="col">count</rh><th scope="col">total</th></tr></thead>`;
    const tbody = document.createElement('tbody')
    btnHome.classList.remove('active')
    btnCart.classList.add('active')
    for (let item of goods)
        createTable(item, tbody);
    table.append(tbody)
    root.append(table)
    root.append(createTotal(goods));
}