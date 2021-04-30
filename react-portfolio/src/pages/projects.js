import React, { useState, useEffect } from "react";
import projectArray from "../projects.json";
import { Col, Row, Container } from "../components/Grid";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    loadProjects();
  }, []);

  // Loads all books and sets them to books
  function loadProjects() {
    setProjects(projectArray);
  }

  return (
    <Container>
      <h1>Portfolio Projects</h1>
      <Row>
        {projects.map((project) => (
          <Col size="md-6" className="col-project">
            <ProjectCard
              key={project.id}
              imageLink={project.imageLink}
              name={project.name}
              image={project.image}
              description={project.description}
              repoLink={project.repoLink}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Projects;
