import "./Home.css";
import { GiCoffeePot } from "react-icons/gi";

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
          Hi everyone! I'm a full-time student with a passion for web
          development and machine learning. I've worked on numerous projects,
          which you can check out in my projects section. Beyond the technical
          realm, I'm also a guitarist and a Kung Fu master. You could say I'm a
          true Renaissance Nerd!
        </p>
      </div>
    </>
  );
}

export default Home;
