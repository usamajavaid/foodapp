import React, { Component } from 'react';
import HomeSlider from '../SubComponents/HomeSlider';
import Footer from '../ReusableComponents/Footer';
import Header from '../ReusableComponents/Header';
import Services from '../SubComponents/Services';
import LatestBlog from '../SubComponents/Latestblog';
import Ourteam from '../SubComponents/Ourteam';
class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <div style={{overflowX:"hidden",overflowY:"hidden"}}>
                <Header/>
                <HomeSlider/>
                <Services/>
                <LatestBlog/>
                <Ourteam/>
                <Footer/>
                </div>
            </React.Fragment>
        )
    }
}
export default Home;