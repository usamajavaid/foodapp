import React, { Component } from 'react';
import Header from '../ReusableComponents/Header';
import Menu from '../SubComponents/Menu';
import Footer from '../ReusableComponents/Footer';
class EClub extends Component {
    render() {
        return (
            <React.Fragment>
                <div class='active-page'>
                <Header/>
                <Menu/>
                <Footer/>
                </div>
            </React.Fragment>
        )
    }
}
export default EClub;