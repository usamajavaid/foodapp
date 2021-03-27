import React, { Component } from 'react';
import Foodheader from '../ReusableComponents/Foodheader';
import Slider from 'react-slick';
import Sliderpic1 from '../images/432.jpg';
import '../Style/food.css';
class Foodgallery extends Component {
    render() {
        return (
            <React.Fragment>
                <Foodheader/>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link active" id="pills-home-tab" 
                            data-toggle="pill" href="#pills-home" role="tab" 
                            aria-controls="pills-home" aria-selected="true"
                        >
                            Delivery
                        </a>
                    </li>
                    <li class="nav-item">
                    <div className="nav-img-tab">
                        <a class="nav-link" id="pills-profile-tab" 
                            data-toggle="pill" href="#pills-profile" 
                            role="tab" aria-controls="pills-profile" 
                            aria-selected="false"
                        >
                            
                                Pick up
                            
                        </a>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="pills-contact-tab" 
                            data-toggle="pill" href="#pills-contact" 
                            role="tab" aria-controls="pills-contact" 
                            aria-selected="false"
                        >
                        Resturants
                    </a>
                    </li>
                    </ul>
                    <div class="tab-content" id="pills-tabContent">
                        <div class="tab-pane fade show active" id="pills-home" 
                            role="tabpanel" aria-labelledby="pills-home-tab"
                        >
                           <div className="container" >
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div id="Wraper9">
                    <Slider
                        speed ={500}
                        slidesToShow={4}
                        slidesToScroll={1}
                        infinite={false}
                        autoplay={false}
                        
                    >
                       
                            <div  id="Page2 ">
                                <div className="img-card"> 
                                    <img src={Sliderpic1} id="slider-img" alt=""/>
                                </div>
                            </div>
                            <div  id="Page2 ">
                                <div className="img-card"> 
                                    <img src={Sliderpic1} id="slider-img" alt=""/>
                                </div>
                            </div>
                            <div  id="Page2 ">
                                <div className="img-card"> 
                                    <img src={Sliderpic1} id="slider-img" alt=""/>
                                </div>
                            </div>
                            <div  id="Page2 ">
                                <div className="img-card"> 
                                    <img src={Sliderpic1} id="slider-img" alt=""/>
                                </div>
                            </div>
                            <div  id="Page2 ">
                                <div className="img-card"> 
                                    <img src={Sliderpic1} id="slider-img" alt=""/>
                                </div>
                            </div>
                            <div  id="Page2 ">
                                <div className="img-card"> 
                                    <img src={Sliderpic1} id="slider-img" alt=""/>
                                </div>
                            </div>
                            <div  id="Page2 ">
                                <div className="img-card"> 
                                    <img src={Sliderpic1} id="slider-img" alt=""/>
                                </div>
                            </div>
                            
                    </Slider>
                </div>
                </div>
                </div>
                </div>
                        </div>
                    <div class="tab-pane fade" id="pills-profile" 
                        role="tabpanel" aria-labelledby="pills-profile-tab"
                    >
                        Pick up
                    </div>
                    <div class="tab-pane fade" id="pills-contact" 
                    role="tabpanel" aria-labelledby="pills-contact-tab"
                    >
                        Shops
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