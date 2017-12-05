import React, { Component } from 'react';
import './App.css';
import { shopProducto } from './data';

const Header = () => {
	return (
        <nav class="navbar navbar-inverse">
            <div class="container-fluid">
                <div class="navbar-header">
                    <a class="navbar-brand" href="#"><img src="http://cicloperu.com/CPANCLUB/wp-content/uploads/2015/04/logo-blue.png" alt="logo" style={{width:"20%"}}/></a>
                </div>
                <ul class="nav navbar-nav">
                    <li class="active"><a href="#">Home</a></li>
                    <li><a href="#">Page 1</a></li>
                    <li><a href="#">Page 2</a></li>
                </ul>
                <form class="navbar-form navbar-left">
                    <div class="input-group">
                        <input type="text" class="form-control" placeholder="Search"/>
                            <div class="input-group-btn">
                                <button class="btn btn-default" type="submit">
                                    <i class="glyphicon glyphicon-search"></i>
                                </button>
                            </div>
                    </div>
                </form>
            </div>
        </nav>
	)
}

export default Header;