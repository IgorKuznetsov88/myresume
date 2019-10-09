import React, { Component } from "react";
import { Row, Col } from "antd";
import "../Education/Education.css";
import AOS from "aos";
import "aos/dist/aos.css";

class Education extends Component {
  componentDidMount() {
    AOS.init({
      duration: 500
    });
  }
  render() {
    let education = this.props.education;
    return (
      <section className="education">
        <Row type="flex" justify="space-around">
          <Col span={8} className="education-col">
            <div className="education__title-main">
              <div>
                <h2>
                  <span className="education__title">
                    <div data-aos="fade-right">Образование</div>
                  </span>
                </h2>
              </div>
            </div>
          </Col>
          <div>
            <Col span={8} className="education-col-items">
              {education.education.map(item => {
                return (
                  <div>
                    <div>
                      <h3 className="university-name">
                        <div data-aos="fade-down">{item.UniversityName}</div>
                      </h3>

                      <p className="university-name__specialization">
                        <div data-aos="fade-up-right">
                          {item.specialization}
                        </div>
                        <span>&bull;</span>
                        <em>{item.YearOfPassing}</em>
                      </p>
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
export default Education;
