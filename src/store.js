import createStore from 'redux-zero'
import { productos, shopProducto, selected } from './data'

const initialState = {
    productos: productos,
    shopProducto: shopProducto,
    selected: 0,
    multiple:0,
}

const store = createStore(initialState)
export default store