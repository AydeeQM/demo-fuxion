import React, { Component } from 'react';
import './Carrusel.css';
import { connect } from 'redux-zero/react';
import { addFuxion, nextAction, previewAction } from './actions';
import Header from './Header';
import Calculo from './Calculo';
import { shopProducto } from './data';

const InfoDish = ({ image, name, price, description, selected }) => {
    return (
        <div
            className="carousel-inner text-center"
            role="listbox">
            <div className="item active">
                <div className="col-lg-4 pull-left">
                    <img className="img1" src={image} />
                </div>
                <div className="col-lg-8 info-middle">
                    <h1 className="text-left">{name}</h1>
                    <p>{description}</p>
                    <div className="row">
                        <div className="col-lg-6 price1">
                            $ {price}.00
                		</div>
                        <div className="col-lg-6">
                            <button
                                className="btn btn-danger pull-right"
                                onClick={() => addFuxion(selected)}
                            >
                                <i class="fa fa-cart-plus" aria-hidden="true"></i>  Añadir al Carrito
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Carousel = ({ productos, selected }) => {
    console.log("fuxionnnnnn", selected)
    return (
        <div className="background-fish">
            <div className="container carousel">
                <div
                    id="carousel-example-generic"
                    className="carousel slide" data-ride="carousel">
                    <div>
                        <InfoDish
                            name={productos[selected].name}
                            image={productos[selected].image}
                            price={productos[selected].price}
                            description={productos[selected].description}
                            selected={selected}
                        />
                        <a
                            className="left carousel-control next1"
                            role="button"
                            data-slide="prev"
                            onClick={previewAction}
                            id="navigate-prev">
                        </a>
                        <a
                            className="right carousel-control next2"
                            role="button"
                            data-slide="next"
                            onClick={nextAction}
                            id="navigate-next">
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );

}

const CarouselView = ({ productos, selected, shopProducto}) => {
    return (
        <div id='wrapper'>
            <Header shopProducto={shopProducto} />
            <div id='main-section'>
                <Calculo shopProducto={shopProducto}/>
                <Carousel productos={productos} selected={selected} />
            </div>
        </div>
    )
}

const mapToProps = ({ productos, selected, shopProducto }) => ({ productos, selected, shopProducto});
export default connect(mapToProps)(CarouselView);