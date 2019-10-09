import React, { Component } from "react";
import Background from "../../img/background.jpg";
import "./Header.css";

const myBackground = {
  backgroundImage: `url(${Background})`,
  position: "relative",
  height: "50vh",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat"
};

class Header extends Component {
  render() {
    return (
      <header style={myBackground} className="background-image">
        <h1>
          <p>Игорь </p>
          <span className="surname"> Кузнецов </span>
        </h1>
        
      </header>
    );
  }
}

export default Header;
