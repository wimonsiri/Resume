import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header id="header" className="navbar navbar-expand flex-column flex-md-row">
      <a
      className="brand d-flex align-items-center"
      href="/"
      >
      <i className="fas fa-cat fa-3x"></i>
      <span className="brand-name">pangp.io</span>
      </a>
      </header>
      );
    }
  }
  
  export default Header;
  