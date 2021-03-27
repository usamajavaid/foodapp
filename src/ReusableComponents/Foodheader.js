import React, { Component } from 'react';
import '../Style/food.css';
import Logo from '../images/applogo.png';
class Foodheader extends Component {
    render() {
        return (
            <React.Fragment>
                <nav class="navbar navbar-expand-lg navbar-light bg-light" id="food-header">
                    <a class="navbar-brand" href="/"><img src={Logo} alt=""/></a>
                        <div class="navbar-nav" id="food-top-links">
                        <a href="#" class="text-decoration-none d-block px-1" >
                            <i class="fa fa-user-circle" aria-hidden="true" id="food-header-link">
                                <b id="food-top-link-style"> Login</b></i>
                        </a>
                        <a href="#" class="text-decoration-none d-block px-1">
                            <i class="fa fa-shopping-bag" aria-hidden="true" id="food-header-link">
                                <b id="food-top-link-style"> Your Cart</b></i>
                        </a>
                        </div>
                </nav>
            </React.Fragment>
        )
    }
}
export default Foodheader;