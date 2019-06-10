import React from 'react';

class About extends React.Component {
  render() {
    if ( this.props.data ) {
      var bio        = this.props.data.bio;
    }
    return (
        <section id="About" className="segment space-huge">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                      <h2 className="text-uppercase">About Me</h2>
                    </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-md-10 text-center">
                  <p>{bio}</p>
                  </div>
                </div>
            </div>
        </section>
      );
    }
  }
export default About;
  