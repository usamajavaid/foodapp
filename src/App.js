import React, { Component } from 'react';
import Routing from './Routing/Routing';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'font-awesome/css/font-awesome.min.css';
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Routing/>
      </React.Fragment>
    )
  }
}

export default App;
