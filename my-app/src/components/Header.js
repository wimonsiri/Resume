import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header id="header" className="segment space-small">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <a className="brand d-flex align-items-center" href="/"><i className="fas fa-cat fa-3x"></i><span className="brand-name">pangp.io</span></a>
          </div>
        </div>
        <div className="row">
            <div className="col-md-12">
              <nav id="pageNav" role="navigation" class="menu">
                <ul className="nav navbar">
                <li className="nav-item"><a href="#About" className="jumpdown"><span>About Me</span></a></li>
                <li className="nav-item"><a href="#Experience" className="jumpdown"><span>Experiences</span></a></li>
                <li className="nav-item"><a href="#skills" className="jumpdown"><span>Skills</span></a></li>
                <li className="nav-item"><a href="#contact" className="jumpdown"><span>Contact</span></a></li>
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
  