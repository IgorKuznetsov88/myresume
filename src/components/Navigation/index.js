import React, { Component } from "react";
import "./Navigation.css";

/* ------NAVIGATION MENU-------- */

class Navigation extends Component {
  render() {
    const sections = [
      "На главную",
      "Обо мне",
      "Образование",
      "Опыт работы",
      "Мои сертификаты",
      "Контакты"
    ];
    const navLinks = sections.map(section => {
      return (
        <li>
          <a href={"#" + section}> {section} </a>
        </li>
      );
    });
    return (
      <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">{navLinks}</ul>
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="top-center">
          <div className="anchor-name">Игорь Кузнецов</div>
        </div>
      </nav>
    );
  }
}
export default Navigation;
