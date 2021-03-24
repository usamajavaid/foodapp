import React, { Component } from 'react';
import Header from '../ReusableComponents/Header';
import Footer from '../ReusableComponents/Footer';
class Cargo extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Footer/>
                <div>
                    Cargo
                </div>
            </div>
        )
    }
}
export default Cargo;