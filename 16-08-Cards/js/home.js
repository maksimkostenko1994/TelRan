const createElement = (good) => {
    const div = document.createElement('dev')
    div.classList.add('item')
    const img = document.createElement('img')
    img.src = `.${good.picture}`;
    const h2 = document.createElement('h2')
    h2.innerText = good.title;
    const h3 = document.createElement('h3')
    h3.innerText = good.description
    const p = document.createElement('p')
    p.innerText = `Price: € ${good.price}`
    const btn = document.createElement('button')
    btn.classList.add('btn')
    btn.innerText = 'add to card'
    div.append(img)
    div.append(h2)
    div.append(h3)
    div.append(p)
    div.append(btn)
    return div;
}

const createBasket = (good) => {
    return {
        picture: good.picture,
        title: good.title,
        description: good.description,
        price: good.price,
        quantity: 1
    }
}

for (let item of goods) {
    root.append(createElement(item))
}

