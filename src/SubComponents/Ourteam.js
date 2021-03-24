import React, { Component } from 'react';
import Usama from '../images/usama.jpeg';
import Abrar from '../images/abrar.jpeg';
import Fahad from '../images/fahad1.jpeg';
class Ourteam extends Component {
    render() {
        return (
            <React.Fragment>
                <div class="py-5 team3 bg-light">
                <div class="container">
                    <div class="row justify-content-center mb-4">
                    <div class="col-md-7 text-center">
                        <h3 class="mb-3">Experienced and Professional Team</h3>
                        <h6 class="subtitle font-weight-normal">You can relay on our amazing 
                            features list and also our customer services will be great experience 
                            for you without doubt and in no-time
                        </h6>
                    </div>
                    </div>
                    <div class="row">
                    <div class="col-lg-4 mb-4">
                        <div class="row">
                        <div class="col-md-12">
                            <img src={Usama} className="img-fluid" />
                        </div>
                        <div class="col-md-12">
                            <div class="pt-2">
                            <h5 class="mt-4 font-weight-medium mb-0">Usama Javed</h5>
                            <h6 class="subtitle">MERN Stack Developer</h6>
                            <p>Usama is a briliant developer with 3 year experience in Web Development.
                            </p>
                            <ul class="list-inline">
                                <li class="list-inline-item">
                                    <a href="#" class="text-decoration-none d-block px-1">
                                        <i className="fa fa-facebook" aria-hidden="true" id="ourteam-icons"></i>
                                    </a>
                                </li>
                                <li class="list-inline-item">
                                    <a href="#" class="text-decoration-none d-block px-1">
                                        <i className="fa fa-twitter" aria-hidden="true"></i>
                                    </a>
                                </li>
                                <li class="list-inline-item">
                                    <a href="#" class="text-decoration-none d-block px-1">
                                        <i className="fa fa-instagram" aria-hidden="true"></i>
                                    </a>
                                </li>
                                <li class="list-inline-item">
                                    <a href="#" class="text-decoration-none d-block px-1">
                                        <i className="fa fa-google-plus" aria-hidden="true"></i>
                                    </a>
                                </li>
                            </ul>
                            </div>
                        </div>
                        </div>
                        
                    </div>
                    
                    <div class="col-lg-4 mb-4">
                        
                        <div class="row">
                        <div class="col-md-12 pro-pic">
                            <img src={Abrar} 
                                    alt="wrapkit" class="img-fluid" />
                        </div>
                        <div class="col-md-12">
                            <div class="pt-2">
                            <h5 class="mt-4 font-weight-medium mb-0">Muhammad Abrar</h5>
                            <h6 class="subtitle">Digital Markting Head</h6>
                            <p>Abrar is very famous in digital markting just because of his briliant work.
                            </p>
                            <ul class="list-inline">
                                <li class="list-inline-item">
                                    <a href="#" class="text-decoration-none d-block px-1">
                                        <i className="fa fa-facebook" aria-hidden="true" id="ourteam-icons"></i>
                                    </a>
                                </li>
                                <li class="list-inline-item">
                                    <a href="#" class="text-decoration-none d-block px-1">
                                        <i className="fa fa-twitter" aria-hidden="true"></i>
                                    </a>
                                </li>
                                <li class="list-inline-item">
                                   <a href="#" class="text-decoration-none d-block px-1">
                                        <i className="fa fa-instagram" aria-hidden="true"></i>
                                    </a>
                                </li> 
                                <li class="list-inline-item">
                                    <a href="#" class="text-decoration-none d-block px-1">
                                        <i className="fa fa-google-plus" aria-hidden="true"></i>
                                    </a>
                                </li>
                            </ul>
                            </div>
                        </div>
                        </div>
                    
                    </div>
                    
                    <div class="col-lg-4 mb-4">
                    
                        <div class="row">
                        <div class="col-md-12 pro-pic">
                            <img src={Fahad} 
                                    alt="wrapkit" class="img-fluid" />
                        </div>
                        <div class="col-md-12">
                            <div class="pt-2">
                            <h5 class="mt-4 font-weight-medium mb-0">Fahad Mehmood</h5>
                            <h6 class="subtitle">Fluter Developer</h6>
                            <p>Fahad is most senior in our company.He has 5 Years experiens in App Development. 
                            </p>
                            <ul class="list-inline">
                                <li class="list-inline-item">
                                    <a href="#" class="text-decoration-none d-block px-1">
                                        <i className="fa fa-facebook" aria-hidden="true" id="ourteam-icons"></i>
                                    </a>
                                </li>
                                <li class="list-inline-item">
                                    <a href="#" class="text-decoration-none d-block px-1">
                                        <i className="fa fa-twitter" aria-hidden="true"></i>
                                    </a>
                                </li>
                                <li class="list-inline-item">
                                    <a href="#" class="text-decoration-none d-block px-1">
                                        <i className="fa fa-instagram" aria-hidden="true"></i>
                                    </a>
                                </li>
                                <li class="list-inline-item">
                                    <a href="#" class="text-decoration-none d-block px-1">
                                        <i className="fa fa-google-plus" aria-hidden="true"></i>
                                    </a>
                                </li>
                            </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>

            </React.Fragment>
        )
    }
}
export default Ourteam;