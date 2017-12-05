import store from './store';

export const addFuxion = (index) => {
    let newList = [...store.getState().shopProducto]
    let original = [...store.getState().productos]
    for (let i in newList) {
        if (newList[i].id == index) {
            newList[i].count += 1;
            store.setState({
                shopProducto: newList
            });
            return;
        }
    }
    newList.push({
        id: index,
        name: original[index].name,
        price: original[index].price,
        count: original[index].count
    });
    store.setState({
        shopProducto: newList
    });

    console.log('cantida!!!!', newList);
}

export const nextAction = () => {
    let selected = store.getState().selected + 1
    if (selected == store.getState().productos.length)
        selected= 0
    store.setState({
        selected: selected
    })
}

export const previewAction = () => {

    let selected = store.getState().selected - 1
    if (selected <= 0)
        selected = store.getState().productos.length - 1
    store.setState({
        selected: selected
    })
}