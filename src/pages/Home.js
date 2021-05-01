import React from "react";
import { Col, Row, Container } from "../components/Grid";

function Home() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-8">
          <div className="col-main">
            <h1 className="index-h1"> About Me </h1>
            <div className="row row-content">
              <img src="./images/profile.jpg" alt="Jody Brzovski" />
              <div className="content-text">
                <p>
                  I am working hard to advance my expertise in software and
                  hardware technologies. Areas of focus include the convergence
                  of new and existing technologies to improve the customer
                  experience while maximizing profitability.
                </p>
                <p>
                  My goal is to be an asset and dependable resource to the
                  company in many different areas of technology in an autonomous
                  or team-based environment.
                </p>
                <p>
                  I am looking for opportunity to advance my education and skill
                  sets to remain competitive on the behalf of a client’s needs
                  with business and market requirements and changes.
                </p>
                <p>
                  I am willing to find new ways to aid and supplement the
                  business processes and goals for an employer, provided by
                  independent research and development initiatives as well as
                  volunteering for challenging roles and tasks.
                </p>
                <h5>Specialties: Full Stack Development</h5>
                <Row>
                  <Col size="md-4">
                    <h6>The Browser</h6>
                    <ol>
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>JavaScript</li>
                      <li>jQuery</li>
                      <li>Bootstrap</li>
                    </ol>
                  </Col>
                  <Col size="md-4">
                    <h6>Cutting Edge Development</h6>
                    <ol>
                      <li>React.js</li>
                    </ol>
                  </Col>
                  <Col size="md-4">
                    <h6>API Interaction</h6>
                    <ol>
                      <li>APIs</li>
                      <li>JSON</li>
                      <li>AJAX</li>
                      <li>Real Time Cloud Database via Firebase</li>
                    </ol>
                  </Col>
                </Row>
                <Row>
                  <Col size="md-4">
                    <h6>Dev Tools</h6>
                    <ol>
                      <li>Heroku</li>
                      <li>Git</li>
                      <li>GitHub</li>
                    </ol>
                  </Col>
                  <Col size="md-4">
                    <h6>Databases</h6>
                    <ol>
                      <li>MySQL</li>
                      <li>MongoDB</li>
                    </ol>
                  </Col>
                  <Col size="md-4">
                    <h6>CS Fundamentals</h6>
                    <ol>
                      <li>Algorithms</li>
                      <li>Data Structures</li>
                    </ol>
                  </Col>
                </Row>
                <Row>
                  <Col size="md-4">
                    <h6>Server Side</h6>
                    <ol>
                      <li>Templating Engines</li>
                      <li>Sessions</li>
                      <li>Writing tests</li>
                      <li>Node.js</li>
                      <li>Express.js</li>
                      <li>Creating APIs</li>
                      <li>MVC</li>
                      <li>User Authentication</li>
                      <li>ORM (Sequelize)</li>
                    </ol>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
