import React from "react";
import { Col, Row, Container } from "../components/Grid";

function Home() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-8">
          <h1 className="index-h1"> About Me </h1>
          <div>
            <img src="/images/profile.jpg" alt="Jody Brzovski" />
            <p>
              I am working hard to advance my expertise in software and hardware
              technologies. Areas of focus include the convergence of new and
              existing technologies to improve the customer experience while
              maximizing profitability.
            </p>
            <p>
              My goal is to be an asset and dependable resource to the company
              in many different areas of technology in an autonomous or
              team-based environment.
            </p>
            <p>
              I am looking for opportunity to advance my education and skill
              sets to remain competitive on the behalf of a client’s needs with
              business and market requirements and changes.
            </p>
            <p>
              I am willing to find new ways to aid and supplement the business
              processes and goals for an employer, provided by independent
              research and development initiatives as well as volunteering for
              challenging roles and tasks.
            </p>
            <ol>
              <li>Specialties: Full Stack Development</li>
              <li>Languages (HTML/CSS/JavaScript/XML)</li>
              <li>Runtime Environment (Node.js)</li>
              <li>
                Frameworks (Express, React, Angular, Ajax, JQuery, JSON,
                Bootstrap)
              </li>
              <li>Legacy (VB6)</li>
              <li>
                Databases (SQL Server v6.5-2008, MySQL, Sequelize, SqlLite,
                MongoDB)
              </li>
            </ol>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
