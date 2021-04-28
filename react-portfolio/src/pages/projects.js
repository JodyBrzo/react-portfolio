import React, { Component } from "react";
import projectArray from "./friends.json";
import { Col, Row, Container } from "../components/Grid";
import ProjecrCard from "../components/ProjecrCard";

class Projects extends Component {
  state = {
    projectArray
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            {this.state.projectArray.map(project => (
              <ProjecrCard
                image-link={project.image-link}
                name={project.name}
                image={project.image}
                description={project.description}
                repo-link={project.repo-link}

              />
            ))}
          </Col>
        </Row>
      </Container>
    )
  }

}

export default Projects;