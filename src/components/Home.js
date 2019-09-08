import React from 'react';

class Home extends React.Component {
  render() {
    if ( this.props.data ) {
      var bio         = this.props.data.blurb;
    }

    return (
        <section id="Home" className="segment space-huge bg-pink">
            <div className="container">
                <div className="row">
                  <div className="col-md-12">
                  <h1><strong>Hello.</strong></h1>
                  <h4 dangerouslySetInnerHTML={ {__html: bio} }></h4>
                  </div>
                </div>
            </div>
        </section>
      );
    }
  }
export default Home;
  