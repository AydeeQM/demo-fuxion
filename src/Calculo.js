import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { productos, shopProducto } from './data';
import './App.css';

const Dish = ({name, price, count}) => {
    return (
        <li className='selected-products-list'>
           <span className='selected-image-price'>
                <span>{name}</span> -------<span>{count}</span> x <span>${price}</span>
            </span>
        </li>
    )
}

const ShoppingCart = ({ shopProducto}) => {
    const dishesList = shopProducto.map((fux, index) => {
        return (
            <Dish
                key={index}
                name={fux.name}
                price={fux.price}
                count={fux.count}
            />
        )
    })

    let totalDishes = shopProducto.length;
    let totalPrice = shopProducto.reduce(function (total, dish) {
        return total + (dish.price * dish.count);
    }, 0);
    let approved = shopProducto.map(fux => fux.count);
    console.log('filet', approved);
    var total = approved.reduce(function (a, b) { return a + b; },0);
    return (
        <section >
        
            <div className="row producto">
                <div className="col-lg-6">
                    <h5>Detalles</h5>
                    <ul data-role='listview' className='k-widget k-listview' id="shop-list">
                        {dishesList}
                    </ul>
                </div>
                <div className="col-lg-6 text-center">
                    <div>
                        <span>
                            Usted lleva <span>{shopProducto.length}</span> tipos de producto.
                        </span>
                    </div>
                    <span className="log"><i class="fa fa-shopping-cart" aria-hidden="true"></i></span>
                    <div className="price-only">{total}</div>
                    <p className='total-price'>Precio total $ {totalPrice}</p>
                </div>
            </div>
        </section>
    )
}

export default ShoppingCart;