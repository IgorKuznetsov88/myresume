import React, { Component } from "react";
import MyPhoto from "../../img/my_photo.JPG";
import { Card } from "antd";
import "../AboutMe/About.css";

const { Meta } = Card;

class About extends Component {
  render() {
    return (
      <section className="about-title">
        <Card
          bordered={false}
          hoverable
          style={{ width: 360 }}
          cover={<img alt="myPhoto" src={MyPhoto} />}
        >
          <Meta title="Кузнецов Игорь" />
          <Meta title="17 августа 1988" />
        </Card>
      </section>
    );
  }
}
export default About;
