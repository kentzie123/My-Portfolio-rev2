function Header() {
  return (
      <nav className="navbar navbar-expand-md backg-light-dark-1 shadow-sm">
          <div className="container-fluid">
              <a className="navbar-brand fw-bold" href="#home">My Portfolio</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav ms-auto hover-float">
                      <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
                      <li className="nav-item"><a className="nav-link" href="#about">About Me</a></li>
                      <li className="nav-item"><a className="nav-link" href="#skills">Skills</a></li>
                      <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
                      <li className="nav-item"><a className="nav-link" href="#certificates">Certificates</a></li>
                      <li className="nav-item"><a className="nav-link" href="#contacts">Contacts</a></li>
                  </ul>
              </div>
          </div>
      </nav>
  );
}

export default Header;
