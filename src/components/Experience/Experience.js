import React, { Component } from "react";
import { Row, Col } from "antd";
import AOS from "aos";
import "aos/dist/aos.css";
import "../Experience/Experience.css";

class Experience extends Component {
  componentDidMount() {
    AOS.init({
      duration: 500
    });
  }
  render() {
    let experience = this.props.experience;
    return (
      <section className="experience">
        <Row jtype="flex" justify="space-around">
          <Col className="experience-col" span={8}>
            <div className="experience__title">
              <div>
                <h2>
                  <span>
                    <div
                      data-aos="fade-down"
                      data-aos-easing="linear"
                      data-aos-duration="1500"
                    >
                      Опыт работы
                    </div>
                  </span>
                </h2>
              </div>
            </div>
          </Col>

          <div>
            <Col className="experience-col-items" span={8}>
              {experience.experience.map(item => {
                return (
                  <div>
                    <div data-aos="flip-right">
                      <div>
                        <h3 className="company-name">{item.CompanyName}</h3>
                        <p className="company-name__specialization">
                          {item.specialization}
                          <span>&bull;</span>
                          <em>
                            {item.MonthOfLeaving} {item.YearOfLeaving}
                          </em>
                        </p>
                        <p>{item.Achievements}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Col>
          </div>
        </Row>
      </section>
    );
  }
}
export default Experience;
