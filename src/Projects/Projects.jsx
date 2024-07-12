import "./Projects.css"; // Ensure Projects.css exists for styling

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
    <div className="projects container">
      <h2 className="title">My Projects</h2>
      <ul className="project-list">
        {projects.map((project) => (
          <li key={project.id} className="project-item">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
            )}
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectsList;
