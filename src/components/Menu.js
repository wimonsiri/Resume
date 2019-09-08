import React from 'react'
import { slide as Menu } from 'react-burger-menu'

class Nav extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }

  constructor (props) {
    super(props)
    this.state = {
      menuOpen: false
    }
  }

  // This keeps your state in sync with the opening/closing of the menu
  // via the default means, e.g. clicking the X, pressing the ESC key etc.
  handleStateChange (state) {
    this.setState({menuOpen: state.isOpen})  
  }
  
  // This can be used to close the menu, e.g. when a user clicks a menu item
  closeMenu () {
    this.setState({menuOpen: false})
  }

  // This can be used to toggle the menu, e.g. when using a custom icon
  // Tip: You probably want to hide either/both default icons if using a custom icon
  // See https://github.com/negomi/react-burger-menu#custom-icons
  toggleMenu () {
    this.setState(state => ({menuOpen: !state.menuOpen}))
  }

  render () {
    return (
      <Menu 
      right 
      pageWrapId={ "page-wrap" } 
      outerContainerId={ "outer-container" } 
      isOpen={this.state.menuOpen}
      onStateChange={(state) => this.handleStateChange(state)}
      >
        <a id="aboutNav" className="menu-item" href="#About" onClick={() => this.closeMenu()}>About Me</a>
        <a id="experiencesNav" className="menu-item" href="#Experience" onClick={() => this.closeMenu()}>Experiences</a>
        <a id="skillsNav" className="menu-item" href="#Skills" onClick={() => this.closeMenu()}>Skills</a>
        <a id="contactNav" className="menu-item" href="#Contact" onClick={() => this.closeMenu()}>Contact</a>
      </Menu>
    );
  }
}

export default Nav;