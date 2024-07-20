import "./Projects.css";
import { FaGithub } from "react-icons/fa";
import { FaWebflow } from "react-icons/fa6";

const projects = [
  {
    id: 1,
    title: "Safety Safar",
    description:
      "The Safety Safar initiative is a commendable project focusing on the safety of women and children. It employs advanced spatiotemporal data analysis and multiple machine learning models to predict future paths and detect anomalies, which is crucial for state change and ensuring safer environments. Such projects are vital as they leverage technology to address social issues, providing insights that can lead to significant improvements in public safety and security.",
    liveLink: "",
    githubLink: "https://github.com/Abhik4004/Safe-Corridor",
  },
  {
    id: 2,
    title: "Movie Review App",
    description:
      "A Full Stack Movie Review App is a comprehensive project that encompasses both client and server-side operations. It typically includes user authentication, allowing users to register and log in to access personalized features. A robust database is integral to store user data, movie information, reviews, and ratings. Such an application offers a platform for movie enthusiasts to share their opinions, connect with others, and discover new films, enhancing the movie-watching experience with social and technological integration.",
    liveLink: "https://movie-review-app-1.onrender.com",
    githubLink: "https://github.com/Abhik4004/Movie_Review_App",
  },
  {
    id: 3,
    title: "Student Attention Modelling",
    description:
      "The concept of using machine learning (ML) to detect human attention span through EEG signaling is a cutting-edge approach that combines neuroscience with artificial intelligence. Projects like these often involve collecting EEG data as individuals perform tasks that require concentration, then applying ML algorithms to identify patterns that correlate with attention levels. This interdisciplinary field holds great promise for advancements in understanding cognitive processes and could lead to innovative applications in education, healthcare, and beyond.",
    liveLink: "",
    githubLink: "https://github.com/Abhik4004/Safe-Corridor",
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
                  <FaWebflow />
                </a>
              )}
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link github-link"
                >
                  <FaGithub />
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
