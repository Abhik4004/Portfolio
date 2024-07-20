import "./Home.css";
import { GiCoffeePot } from "react-icons/gi";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function Home() {
  return (
    <>
      <div className="Hero container">
        <img className="profile" src="Prof.jpg" alt="Abhik" />
        <h1 className="Name">Abhik Ghosh</h1>
        <hr className="divider" />
        <p className="tag">
          Forever-Student | <GiCoffeePot />
        </p>

        <p className="me">
          Hi everyone! I am a full-time student with a passion for web
          development and machine learning. I ve worked on numerous projects,
          which you can check out in my projects section. Beyond the technical
          realm, I am also a guitarist and a Kung Fu master. You could say I am
          a true Renaissance Nerd!
        </p>

        <div className="social-links">
          <a
            href="https://github.com/Abhik4004"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/abhik-ghosh-27b3632a0/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/artgo_2004/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </>
  );
}

export default Home;
