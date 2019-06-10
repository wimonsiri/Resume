import React from 'react';

class Menu extends React.Component {
  render() {
    return (
        <section id="Menu" className="segment space-medium">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                      <nav id="pageNav" role="navigation">
                        <ul className="nav navbar">
                        <li className="nav-item"><a href="#About" className="jumpdown">About Me</a></li>
                        <li className="nav-item"><a href="#Experience" className="jumpdown">Experiences</a></li>
                        <li className="nav-item"><a href="#skills" className="jumpdown">Skills</a></li>
                        <li className="nav-item"><a href="#showcase" className="jumpdown">Showcase</a></li>
                        <li className="nav-item"><a href="#contact" className="jumpdown">Contact</a></li>
                        </ul>
                      </nav>
                    </div>
                </div>
            </div>
        </section>
      );
    }
  }
export default Menu;
  