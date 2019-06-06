import React from 'react';

class Name extends React.Component {
  render() {
    return (
        <section id="sectionName" className="segment space-huge bg-pink">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                      <img className="img-fluid profile-img" src={process.env.PUBLIC_URL + '/Assets/images/Img_profile.png'}></img>
                    </div>
                </div>
                <div className="row">
                  <div className="col-md-12 text-center">
                    <h3 class="text-uppercase profile-name">Wimonsiri Pokasame</h3>
                    <p className="profile-position font-italic accent"><strong>Front End Developer</strong></p>
                    <p className="profile-address font-italic">094-553-8085  <a href="mailto:wpakasame@gmail.com" class="accent">wpakasame@gmail.com</a>  Bangkok, Thailand</p>
                  </div>
                </div>
            </div>
        </section>
      );
    }
  }
export default Name;
  