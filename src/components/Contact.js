import React from 'react';

class Contact extends React.Component {
  render() {
    if ( this.props.data ) {
      var name        = this.props.data.name;
      var occupation  = this.props.data.occupation;
      var phone       = this.props.data.phone;
      var email       = this.props.data.email;
      var birthday    = this.props.data.birthday;
      var district    = this.props.data.address.District;
      var province    = this.props.data.address.Province;
      var country     = this.props.data.address.Country;
      var zip     = this.props.data.address.zip;
      var socials = this.props.data.social.map(function(socials){
            return <li className="list-inline-item" key={socials.name}><a href={socials.url} className="social-icon" target="_blank"><i className={socials.className}></i></a></li>
        })
    }
    return (
        <section id="Contact" className="segment space-small">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                      <h4><strong>Contact</strong></h4>
                    </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                  <p className="my-0">Name: <strong>{name}</strong></p>
                  <p className="my-0">Birthday: {birthday}</p>
                  <p className="my-0">Address: {district} District {province} {zip}, {country}</p>
                  <p className="my-0">Phone: {phone}</p>
                  <p className="my-0">Email: <a href="mailto:{email}">{email}</a></p>
                  <ul className="socials">
                  {socials}
                  </ul>
                  </div>
                </div>
            </div>
        </section>
      );
    }
  }
export default Contact;
  