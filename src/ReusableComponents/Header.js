import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import '../Style/style.css';
import Logo from '../images/applogo.png';
class Header extends Component {
    loginbtn(login) {
        this.props.history.push(login);
      }
    render() {
        return (
            <React.Fragment>
                 <header class="top-navbar">
                    <nav class="navbar navbar-expand-lg navbar-light bg-light">
                        <div class="container">
                            <a class="navbar-brand" href="/">
                                <img src={Logo} alt="" />
                            </a>
                            <button class="navbar-toggler" type="button" data-toggle="collapse" 
                                    data-target="#navbars-rs-food" aria-controls="navbars-rs-food" 
                                    aria-expanded="false" aria-label="Toggle navigation" id="toggle-btn"
                            >
                            <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbars-rs-food">
                                <ul class="navbar-nav ml-auto">
                                    <li class="nav-item "><a class="nav-link" href="/">Home</a></li>
                                    <li class="nav-item "><a class="nav-link" href="/Components/EClub">Membership</a></li>
                                    <li class="nav-item "><a class="nav-link" href="/Components/AboutUs">About</a></li>
                                    <li class="nav-item "><a class="nav-link" href="/Components/Help">Help</a></li>
                                    <button type="button " class="btn"  id="login-btn" onClick={() => this.loginbtn('/ReusableComponents/Login') }>Login</button>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </header>
                
            </React.Fragment>
        )
    }
}
export default withRouter(Header);