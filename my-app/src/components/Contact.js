import React from 'react';

class Contact extends React.Component {
  render() {
    if ( this.props.data ) {
      var name        = this.props.data.name;
      var occupation  = this.props.data.occupation;
      var profile_img = this.props.data.image;
      var phone       = this.props.data.phone;
      var email       = this.props.data.email;
      var province    = this.props.data.address.Province;
      var country     = this.props.data.address.Country;
    }
    return (
        <section id="About" className="segment space-small">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                      <h4><strong>Contact</strong></h4>
                    </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                  <p class="my-0">Name: <strong>{name}</strong></p>
                  <p class="my-0">Address: {province}, {country}</p>
                  <p class="my-0">Phone: {phone}</p>
                  <p class="my-0">Email: <a href="mailto:{email}">{email}</a></p>
                  </div>
                </div>
            </div>
        </section>
      );
    }
  }
export default Contact;
  