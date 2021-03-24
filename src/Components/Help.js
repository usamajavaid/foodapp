import React, { Component } from 'react';
import Header from '../ReusableComponents/Header';
import Footer from '../ReusableComponents/Footer';
class Help extends Component {
    render() {
        return (
            <React.Fragment>
                <div class='active-page'>
                <Header/>
                <Footer/>
                </div>
            </React.Fragment>
        )
    }
}
export default Help;