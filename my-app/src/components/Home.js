import React from 'react';

class Home extends React.Component {
  render() {
    if ( this.props.data ) {
      var name        = this.props.data.name;
      var occupation  = this.props.data.occupation;
      var bio         = this.props.data.bio;
	  var profile_img = this.props.data.image;
	  var phone       = this.props.data.phone;
	  var email       = this.props.data.email;
	  var province    = this.props.data.address.Province;
	  var country     = this.props.data.address.Country;
    }

    return (
        <section id="Home" className="segment space-huge bg-pink">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                      <img className="img-fluid profile-img" src={process.env.PUBLIC_URL + '/Assets/images/' + profile_img } alt={name}></img>
                    </div>
                </div>
                <div className="row">
                  <div className="col-md-12 text-center">
                    <h3 className="text-uppercase profile-name">{name}</h3>
                    <p className="profile-position font-italic accent"><strong>{occupation}</strong></p>
                    <p className="profile-address font-italic">{phone} <a href={ 'mailto:' + email } className="accent">{email}</a>  {province}, {country}</p>
                  </div>
                </div>
            </div>
        </section>
      );
    }
  }
export default Home;
  