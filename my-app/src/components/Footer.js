import React from 'react';

class Footer extends React.Component {
  render() {
    if ( this.props.data ) {
        var socials= this.props.data.social.map(function(socials){
            return <li className="list-inline-item" key={socials.name}><a href={socials.url} className="social-icon" target="_blank"><i className={socials.className}></i></a></li>
        })
    }
    return (
        <footer>
            <section id="footer" className="segment space-small">
            <div className="container">
            <div class="row">
            <div class="col-md-12">
            <ul class="socials list-unstyled">
            {socials}
            </ul>
            </div>
            </div>
            </div>
            </section>
        </footer>
      );
    }
  }
export default Footer;
  