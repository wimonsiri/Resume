import React from 'react';

class About extends React.Component {
  render() {
    if ( this.props.data ) {
      var name        = this.props.data.name;
      var occupation  = this.props.data.occupation;
      var profile_img = this.props.data.image;
      var phone       = this.props.data.phone;
      var email       = this.props.data.email;
      var province    = this.props.data.address.Province;
      var country     = this.props.data.address.Country;
      var bio        = this.props.data.bio;
    }
    return (
        <section id="About" className="segment space-small">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                      <img className="img-fluid profile-img" src={process.env.PUBLIC_URL + '/Assets/images/' + profile_img } alt={name}></img>
                      <h4><strong>About Me</strong></h4>
                    </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                  <p dangerouslySetInnerHTML={ {__html: bio} }></p>
                  </div>
                </div>
            </div>
        </section>
      );
    }
  }
export default About;
  