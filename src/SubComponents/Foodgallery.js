import React, { Component } from 'react';
import Foodheader from '../ReusableComponents/Foodheader';
import Slider from 'react-slick';
import Sliderpic1 from '../images/20817630.jpg';
import Sliderpic2 from '../images/289.jpg';
import Sliderpic3 from '../images/285.jpg';
import Sliderpic4 from '../images/444.jpg';
import Sliderpic5 from '../images/489.jpg';
import Sliderpic6 from '../images/20940921.jpg';
import Sliderpic7 from '../images/11775.jpg';
import Sliderpic8 from '../images/432.jpg';
import Sliderpic9 from '../images/256.jpg';
import Freepic1 from '../images/3864210.jpg';
import Freepic2 from '../images/3864211.jpg';
import '../Style/food.css';
import '../Style/style.css';
class Foodgallery extends Component {
    render() {
        return (
            <React.Fragment>
                <Foodheader/>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <nav>
                                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                    <a class="nav-item nav-link active" id="nav-home-tab" 
                                        data-toggle="tab" href="#nav-home" role="tab" 
                                        aria-controls="nav-home" aria-selected="true"
                                        id="tabs-style"
                                    >
                                        Delivery
                                    </a>
                                    <a class="nav-item nav-link" id="nav-profile-tab" 
                                        data-toggle="tab" href="#nav-profile" role="tab" 
                                        aria-controls="nav-profile" aria-selected="false"
                                        id="tabs-style"
                                    >
                                        Shops
                                    </a>
                                    <a class="nav-item nav-link" id="nav-contact-tab" 
                                        data-toggle="tab" href="#nav-contact" role="tab" 
                                        aria-controls="nav-contact" aria-selected="false"
                                        id="tabs-style"
                                    >
                                        Resturants
                                    </a>
                                </div>
                            </nav>
                                <div class="tab-content" id="nav-tabContent">
                                <div class="tab-pane fade show active" id="nav-home" role="tabpanel" 
                                    aria-labelledby="nav-home-tab"
                                >
                                    <div className="container" id="marginfortop">
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <div id="Wraper9">
                                            <Slider
                                                speed ={500}
                                                slidesToShow={4}
                                                slidesToScroll={1}
                                                infinite={true}
                                                autoplay={false}
                                                
                                            >
                                    
                                            <div  id="Page2 ">
                                                <div className="img-card"> 
                                                    <img src={Sliderpic1} id="slider-img" alt=""/>
                                                </div>
                                            </div>
                                            <div  id="Page2 ">
                                                <div className="img-card"> 
                                                    <img src={Sliderpic2} id="slider-img" alt=""/>
                                                </div>
                                            </div>
                                            <div  id="Page2 ">
                                                <div className="img-card"> 
                                                    <img src={Sliderpic3} id="slider-img" alt=""/>
                                                </div>
                                            </div>
                                            <div  id="Page2 ">
                                                <div className="img-card"> 
                                                    <img src={Sliderpic4} id="slider-img" alt=""/>
                                                </div>
                                            </div>
                                            <div  id="Page2 ">
                                                <div className="img-card"> 
                                                    <img src={Sliderpic5} id="slider-img" alt=""/>
                                                </div>
                                            </div>
                                            <div  id="Page2 ">
                                                <div className="img-card"> 
                                                    <img src={Sliderpic6} id="slider-img" alt=""/>
                                                </div>
                                            </div>
                                            <div  id="Page2 ">
                                                <div className="img-card"> 
                                                    <img src={Sliderpic7} id="slider-img" alt=""/>
                                                </div>
                                            </div>
                                            <div  id="Page2 ">
                                                <div className="img-card"> 
                                                    <img src={Sliderpic8} id="slider-img" alt=""/>
                                                </div>
                                            </div>
                                            <div  id="Page2 ">
                                                <div className="img-card"> 
                                                    <img src={Sliderpic9} id="slider-img" alt=""/>
                                                </div>
                                            </div>
                                            
                                    </Slider>
                                </div>
                                </div>
                                </div>
                                </div>
                                <div className="container" id="marginforbootom">
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <h1 id="h1-style">Free Delivery Deals</h1>
                                        </div>
                                    </div>
                                    <br></br>
                                    <div className="row">
                                        <div className="col-lg-4 col-sm-4 col-xs-4 col-md-4">
                                        <div className="container" id="free-img-card">
                                            <img src={Freepic1} alt="Food"/>
                                            <div className="blook-heading">
                                                <p style={{marginBottom:"0px"}}>Free Delivery</p>
                                            </div>
                                            <div className="time-block">
                                                <p>35<br></br>Min</p>
                                            </div>
                                            <h1 id="menu-detail-heading">Special Barbecue 
                                                <i id="menu-rating-star" 
                                                    class="fa fa-star" aria-hidden="true"
                                                >
                                                    <b id="rating-text"> 3.8/5(3K+)</b>
                                                </i>
                                            </h1>
                                            <p id="menu-detail-paragraph"><b style={{color:"#4d5bd1"}}> $$$ </b> 8 pieces
                                                 Malhi Boti 4 Peaces Kabab 1.5 Litre Drink.
                                            </p>
                                            <p><b>Free</b> delivery</p>
                                        </div> 
                                        </div>
                                        <div className="col-lg-4 col-sm-4 col-xs-4 col-md-4" id="right-menu-card">
                                        <div className="container" id="free-img-card">
                                            <img src={Freepic2}  alt="Food"/>
                                            <div className="blook-heading">
                                                <p style={{marginBottom:"0px"}}>Free Delivery</p>
                                            </div>
                                            <div className="time-block">
                                                <p>30<br></br>Min</p>
                                            </div>
                                            <h1 id="menu-detail-heading">Fast food  
                                                <i id="menu-rating-star" 
                                                    class="fa fa-star" aria-hidden="true"
                                                >
                                                    <b id="rating-text"> 3.9(4K+)</b>
                                                </i>
                                            </h1>
                                            <p id="menu-detail-paragraph"><b style={{color:"#4d5bd1"}}> $$$ </b> Grill Burger,
                                                 Fries and half Litre Drink.
                                            </p>
                                            <p><b>Free</b> delivery</p>
                                        </div> 
                                        </div>
                                    </div>
                                </div>
                                </div>
                                <div class="tab-pane fade" id="nav-profile" role="tabpanel" 
                                    aria-labelledby="nav-profile-tab"
                                >
                                   <h1 style={{marginTop:"300px",textAlign:"center"}}>Coming to your area soon</h1>
                                <p style={{textAlign:"center"}}>We're working our way to your neighborhood. 
                                    In the meantime, check out the restaurants near you.
                                </p>
                                </div>
                                <div class="tab-pane fade" id="nav-contact" 
                                    role="tabpanel" aria-labelledby="nav-contact-tab"
                                >
                                    <h1 style={{marginTop:"300px",textAlign:"center"}}>Coming to your area soon</h1>
                                <p style={{textAlign:"center"}}>We're working our way to your neighborhood. 
                                    In the meantime, check out the restaurants near you.
                                </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </React.Fragment>
        )
    }
}
export default Foodgallery;