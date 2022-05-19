const shorten = title => {
    const splitedTitle = title.split(' ');
    const newTitle = `${splitedTitle[0]} ${splitedTitle[1]}`;
    return newTitle;
}

const quantityCount = (items, id) => {
    let quantity;
    const indexItem = items.findIndex(item => item.id === id);
    if(indexItem === -1) {
        quantity = 0;
        return quantity;
    } else {
        const quantity = items[indexItem].quantity;
        return quantity;
    }
}

const sumItems = items => {
    const itemsCounter = items.reduce((total, product) => total + product.quantity, 0);
    const total = items.reduce((total, product) => total + (product.price * product.quantity), 0).toFixed(2);
     
    return {
        itemsCounter,
        total,
    }
}

export {
    shorten,
    quantityCount,
    sumItems,
}