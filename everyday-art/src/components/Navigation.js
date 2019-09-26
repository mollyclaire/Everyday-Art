import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';

class Navigation extends Component {
    constructor() {
        super();
        this.state = {

        }
        // this.showSettings = this.showSettings.bind(this);
    }
    
    // showSettings (event) {
    //     event.preventDefault();
    
    //   }

      render () {
        return (
          <Menu right>
            <a id="home" className="menu-item" href="/saved">Saved</a>
            {/* <a id="about" className="menu-item" href="/about">About</a>
            <a id="contact" className="menu-item" href="/contact">Contact</a> */}
            {/* <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a> */}
          </Menu>
        );
      }
}

export default Navigation;
