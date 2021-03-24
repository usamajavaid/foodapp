import React, { Component } from 'react';
import Logo from '../images/applogo.png';
class Footer extends Component {
    render() {
        return (
            <React.Fragment>
               <footer class="footer">
        <div class="container">
            <div class="row">
                <div class="col-md-4 col-sm-4 col-xs-12">
                    <div class="widget clearfix">
                        <div id="footer-logo">
                            <img src={Logo} alt="" />
                        </div>
                        <br></br>
                        <p> Integer rutrum ligula eu dignissim laoreet. Pellentesque venenatis nibh sed tellus faucibus bibendum. 
                            Sed fermentum est vitae rhoncus molestie. Cum sociis natoque penatibus et magnis dis montes.</p>
                        <p>Sed fermentum est vitae rhoncus molestie. Cum sociis natoque penatibus et magnis dis montes.</p>
                    </div>
                </div>

				<div class="col-md-4 col-sm-4 col-xs-12">
                    <div class="widget clearfix">
                        <div class="widget-title">
                            <h3>Pages</h3>
                        </div>

                        <ul class="footer-links hov">
                            <li><a href="#">Home <span class="icon icon-arrow-right2"></span></a></li>
							<li><a href="#">Membership <span class="icon icon-arrow-right2"></span></a></li>
							<li><a href="#">Services <span class="icon icon-arrow-right2"></span></a></li>
							<li><a href="#">About <span class="icon icon-arrow-right2"></span></a></li>
							<li><a href="#">Help <span class="icon icon-arrow-right2"></span></a></li>
							<li><a href="#">Contact <span class="icon icon-arrow-right2"></span></a></li>
                        </ul>
                    </div>
                </div>
				
                <div class="col-md-4 col-sm-4 col-xs-12">
                    <div class="footer-distributed widget clearfix">
                        <div class="widget-title">
                            <h3>Subscribe</h3>
							<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which one know this tricks.</p>
                        </div>
						
						<div class="footer-right">
							<form method="get" action="#">
								<input placeholder="Subscribe our newsletter.." name="search"/>
								<i class="fa fa-envelope-o"></i>
							</form>
						</div>                        
                    </div>
                </div>
            </div>
            </div>
            <div className="container">
            <div class="verybottom">
              <div className="span12">
                <div class="aligncenter">
                  <div className="row">
                    <div className="col-xl-12 col-md-12 col-lg-12 col-sm-12 col-xs-12">
                    <p>289 Ajmal Plaza,1st Floor Opp Gourmet Bakers Btala Colony Faisalabad
                      <br></br>
                      +92-3-111-155-144
                      <br></br>
                      support@mashvra.com
                    </p>
                    </div>
                  </div>
                <div className="row">
                    <div className="col-xl-12 col-md-12 col-lg-12 col-sm-12 col-xs-12">
                      <div class="social-links">
                      <ul class="social-links">
                        <li><a href="#" title="Twitter"><i class="icon-circled icon-64 icon-twitter"></i></a></li>
                        <li><a href="#" title="Facebook"><i class="icon-circled icon-64 icon-facebook"></i></a></li>
                        <li><a href="#" title="Google plus"><i class="icon-circled icon-64 icon-google-plus"></i></a></li>
                        <li><a href="#" title="Linkedin"><i class="icon-circled icon-64 icon-linkedin"></i></a></li>
                        <li><a href="#" title="Pinterest"><i class="icon-circled icon-64 icon-pinterest"></i></a></li>
                      </ul>
                      </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12 col-md-12 col-lg-12 col-sm-12 col-xs-12">
                    <p>
                      &copy; MicroStar - All right reserved
                    </p>
                        Designed by <a href="#" class="social-links">MicroStarMade</a>
                    </div>
                  </div>
              </div>
              </div>
            </div>
      </div>
    </footer>
            </React.Fragment>
        )
    }
}
export default Footer;