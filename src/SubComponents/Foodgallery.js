import React, { Component } from 'react';
import FoodHeader from '../ReusableComponents/Foodheader';
import Foodtabs from '../SubComponents/Foodtabs';
class Foodgallery extends Component {
    render() {
       
        return (
            <React.Fragment>
                <FoodHeader/>
                <Foodtabs/>
            </React.Fragment>
        )
    }
}
export default Foodgallery;