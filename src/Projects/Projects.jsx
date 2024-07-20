import "./Projects.css";

const projects = [
  {
    id: 1,
    title: "Safety Safar",
    description: "Description of Project 1 and what you learned from it.",
    liveLink: "https://example.com/project1",
    githubLink: "https://github.com/username/project1",
  },
  {
    id: 2,
    title: "Project 2",
    description: "Description of Project 2 and what you learned from it.",
    liveLink: "https://example.com/project2",
    githubLink: "https://github.com/username/project2",
  },
];

function ProjectsList() {
  return (
    <div className="projects-container">
      <h2 className="projects-title">My Projects</h2>
      <ul className="project-list">
        {projects.map((project) => (
          <li key={project.id} className="project-item">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-links">
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link live-link"
                >
                  Live Demo
                </a>
              )}
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link github-link"
                >
                  GitHub
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectsList;
