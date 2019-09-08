import React from 'react';

class CustomIcon extends React.Component {
  render () {
    return (
      <button className="hamburger hamburger--squeeze" type="button">
        <span className="hamburger-box">
            <span className="hamburger-inner"></span>
        </span>
        </button>
    );
  }
}

export default CustomIcon;