import React from 'react';

class Name extends React.Component {
  render() {
    return (
        <section id="sectionName" className="segment">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                    <img className="img-fluid profile-img" src={process.env.PUBLIC_URL + '/Assets/images/Img_profile.png'}></img>
                    </div>
                </div>
            </div>
        </section>
      );
    }
  }
  
export default Name;
  