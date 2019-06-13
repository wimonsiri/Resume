import React from 'react';

class Header extends React.Component {

  // This can be used to toggle the menu, e.g. when using a custom icon
  // Tip: You probably want to hide either/both default icons if using a custom icon
  // See https://github.com/negomi/react-burger-menu#custom-icons
  toggleMenu () {
    this.setState(state => ({menuOpen: !state.menuOpen}))
  }

  render() {
    return (
    <header id="header" className="segment space-small">
      <div className="container-fluid">
        <div className="row">
          <div className="col-9">
            <a className="brand" href="/"><div className="d-flex align-items-center"><i className="fas fa-cat fa-3x"></i><span className="brand-name">pangp.io</span></div></a>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <nav id="pageNav" role="navigation" className="menu">
              <ul className="nav navbar">
                <li className="nav-item"><a href="#About" className="jumpdown"><span>About Me</span></a></li>
                <li className="nav-item"><a href="#Experience" className="jumpdown"><span>Experiences</span></a></li>
                <li className="nav-item"><a href="#Skills" className="jumpdown"><span>Skills</span></a></li>
                <li className="nav-item"><a href="#Contact" className="jumpdown"><span>Contact</span></a></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
    );
  }
}

export default Header;
