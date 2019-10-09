import React, { Component } from "react";
import { Carousel, Icon } from "antd";
import HtmlSertificate from "../../img/html_sertificate.JPG";
import CssSertificate from "../../img/css_sertificate.JPG";
import JsSertificate from "../../img/js_sertificate.JPG";
import "../Certificates/Certificates.css";

export default class CarouselComponent extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.carousel = React.createRef();
  }
  next() {
    this.carousel.next();
  }
  previous() {
    this.carousel.prev();
  }

  render() {
    const props = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="carousel-wrapper">
        <div>
          <Carousel
            className="sertificates-carousel"
            ref={node => (this.carousel = node)}
            {...props}
            arrows={true}
            centerMode={true}
          >
            <div>
              <img
                src={HtmlSertificate}
                alt="HTML"
                className="sertificates_img"
              />
            </div>
            <div>
              <img
                src={CssSertificate}
                alt="CSS"
                className="sertificates_img"
              />
            </div>
            <div>
              <img
                src={JsSertificate}
                alt="JavaScript"
                className="sertificates_img"
              />
            </div>
          </Carousel>
          <div className="wrap-arrows-block">
            <div className="left-arrow-block">
              <Icon
                className="left-arrow"
                type="caret-left"
                onClick={this.previous}
              />
            </div>
            <div className="right-arrow-block">
              <Icon
                className="right-arrow"
                type="caret-right"
                onClick={this.next}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
