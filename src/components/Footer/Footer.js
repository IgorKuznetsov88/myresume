import React, { Component } from "react";
import '../Footer/Footer.css'
import Icons from "../ContactIcons/icons";


class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        
          <div className="wrapper">
            <div className="container-inner">
        <h2 className="contact-title">Контакты</h2>
        <div className="social-icons">
          <Icons />
        </div>
          </div>
          </div>
        
      </footer>
    );
  }
}

export default Footer;
