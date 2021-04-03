import React, { Component } from 'react';
import Header from '../ReusableComponents/Header';
import Footer from '../ReusableComponents/Footer';
import Cabbackground from '../images/cab-bg.jpg';
import '../Style/cab.css';
import Cabheader from '../ReusableComponents/Cabheader';
import Burgericon from '../images/burgericon.png';
import Deliveryicon from '../images/deliveryicon.png';
import Caricon from '../images/caricon.png';
import Estoreicon from '../images/estoreicon.png';
class Cab extends Component {
    render() {
        return (
            <div>
                <Cabheader/>
                <div className="cab-text-block">
                    <h1 id="wraper-heading">Everyday life, made simple.</h1>
                    <p id="wraper-paragrph" style={{marginBottom:"0px"}}>
                        Ride, order food, shop, pay or become a Captain.
                        Careem is a hassle-free, one stop solution for your
                        daily needs.
                    </p>
                    <div className="flex social-btns">
                        <a className="app-btn blu flex vert" href="http:apple.com">
                            <i className="fa fa-apple" aria-hidden="true"></i>
                            <p>Available on <br/> <span class="big-txt">App Store</span></p>
                        </a>

                        <a className="app-btn blu flex vert" href="http:google.com">
                            <i className="fa fa-play" aria-hidden="true"></i>
                            <p>Get it on <br/> <span class="big-txt">GooglePlay</span></p>
                        </a>
                    </div>
                </div>
                <div className="cab-bg-card">
                    <img src={Cabbackground} alt="" id="cab-bg-img"/>
                </div>
                <div className="container" id="app-icon-portion">
                    <div className="row">
                        <div id="h1-style"className="col-lg-12" style={{textAlign:"center",color:"black",fontWeight:"700"}}>
                            One app for everyday needs
                        </div>
                    </div>
                    <div className="row" id="products-icon-portion">
                        <div className="col-lg-3 col-md-3 col-sm-3">
                           <div className="functionality-box">
                                <img src={Burgericon} id="cab-icon-style" />
                                <br></br>
                                Food
                           </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-3">
                            <div className="functionality-box">
                                <img src={Deliveryicon} id="cab-icon-style" />
                                <br></br>
                                Delivery
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-3">
                           <div className="functionality-box">
                                <img src={Caricon} id="cab-icon-style" />
                                <br></br>
                                Car
                           </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-3">
                            <div className="functionality-box">
                                <img src={Estoreicon} id="cab-icon-style" />
                                <br></br>
                                E-Store
                            </div>
                        </div>
                    </div>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <Footer/>
            </div>
        )
    }
}
export default Cab;