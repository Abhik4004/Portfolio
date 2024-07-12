import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <nav role="navigation">
        <div id="menuToggle">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
          <ul id="menu">
            <a href="/">
              <li>Home</li>
            </a>
            <a href="/about">
              <li>About</li>
            </a>
            <a href="/project">
              <li>Projects</li>
            </a>
            <a href="#">
              <li>Experience</li>
            </a>
            <a href="#">
              <li>Blog</li>
            </a>
            <a href="#">
              <li>Contact</li>
            </a>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
