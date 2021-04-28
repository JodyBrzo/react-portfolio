import React, { useEffect, useState } from "react";
import projectArray from "./friends.json";

function Projects() {
  const [projects, setProjects] = useState([]);

useEffect(() => {
  setProjects(projectArray);
}, []);

}

export default Projects;