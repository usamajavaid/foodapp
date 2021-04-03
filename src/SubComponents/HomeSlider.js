import React, { Component } from 'react';
import Slider01 from '../images/slider-01.jpg';
import Slider02 from '../images/slider-02.jpg';
import Slider03 from '../images/slider-03.jpg';
import '../Style/style.css';
 class HomeSlider extends Component {
    render() {
        return (
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                    <div className="carousel-item active">
                        <img className="d-block w-100" src={Slider01} alt="First slide" id="slider-img"/>
                        <div className="carousel-caption d-none d-md-block" id="sliderheading">
                            <h1 className="m-b-20"><strong>Welcome To <br></br> Microstar App</strong></h1>
							<p id="paragraph">See how your users experience your website in realtime or view  <br></br> 
							trends to see any changes in performance over time.</p>
                        </div>
                        
                    </div>
                    <div className="carousel-item">
                    <img className="d-block w-100" src={Slider02} alt="First slide" id="slider-img"/>
                        <div className="carousel-caption d-none d-md-block" id="sliderheading">
                            <h1 className="m-b-20"><strong>Welcome To <br></br> Microstar App</strong></h1>
							<p id="paragraph">See how your users experience your website in realtime or view  <br></br> 
							trends to see any changes in performance over time.</p>
                        </div>
                        </div>
                    <div className="carousel-item">
                    <img className="d-block w-100" src={Slider03} alt="First slide" id="slider-img"/>
                        <div className="carousel-caption d-none d-md-block" id="sliderheading">
                            <h1 className="m-b-20"><strong>Welcome To <br></br> Microstar App</strong></h1>
							<p id="paragraph">See how your users experience your website in realtime or view  <br></br> 
							trends to see any changes in performance over time.</p>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev" id="slider-btn"
                        style={{marginLeft:"50px"}}    
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next" id="slider-btn"
                        style={{marginRight:"50px"}}
                >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>

            </div>
        )
    }
}
export default HomeSlider;