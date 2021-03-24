import React, { Component } from 'react';
import Header from '../ReusableComponents/Header';
import Footer from '../ReusableComponents/Footer';
class Cab extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Footer/>
                <div>
                    Cab
                </div>
            </div>
        )
    }
}
export default Cab;