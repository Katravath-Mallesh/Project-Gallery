import './index.css'

const Header = () => (
  <nav className="nav-header">
    <div className="nav-content">
      <p className="website-logo">N</p>
      <ul className="nav-menu">
        <li>
          <a
            href="https://www.linkedin.com/in/nikhil-elumagandla/"
            target="._blank"
          >
            <img
              className="social-network-img"
              src="https://assets.ccbp.in/frontend/react-js/projects-linkedin-img.png"
              alt="Linked In"
            />
          </a>
        </li>
        <li>
          <a href="https://github.com/nikhil-elumagandla" target="._blank">
            <img
              className="social-network-img"
              src="https://assets.ccbp.in/frontend/react-js/projects-github-img.png"
              alt="Git Hub"
            />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/Nikhil_22_03" target="._blank">
            <img
              className="social-network-img"
              src="https://assets.ccbp.in/frontend/react-js/projects-twitter-img.png"
              alt="Twitter"
            />
          </a>
        </li>
      </ul>
    </div>
  </nav>
)

export default Header
