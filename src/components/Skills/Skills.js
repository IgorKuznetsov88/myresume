import React, { Component } from "react";
import { Row, Col } from "antd";
import "../Skills/Skills.css";

class Skills extends Component {
  render() {
    let skills = this.props.skills;
    return (
      <section className="skills">
        <Row justify="space-around">
          <Col span={24}>
            <div className="skills__title">
              <h2>
                <span>Навыки</span>
              </h2>
            </div>
          </Col>

          <div>
            <div>
              <Col span={24} className="skills-names">
                <ul>
                  {skills.skills.map(item => {
                    return (
                      <li>
                        <div>
                          <span>{item.skillname}</span>
                          <div>{item.Progress} </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </Col>
            </div>
          </div>
        </Row>
      </section>
    );
  }
}
export default Skills;
