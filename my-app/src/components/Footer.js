import React from 'react';

class Footer extends React.Component {
  render() {
    return (
        <footer>
            <section id="footer" className="segment space-small">
            <div className="container-fluid">
            <div className="row">
            <div className="col-lg-6 col-sm-4">
            <div class="mobile-border-top"></div>
            <div className="footer-border-top">
            Copyright© 2019 pangthebabydustbunny. All rights reserved.
            </div>
            </div>
            <div class="col-lg-4 col-sm-4">
            <div className="footer-border-top"><a href="https://pangthebabydustbunny.wordpress.com/" target="_blank"><strong>Blogs</strong></a></div>
            </div>
            <div className="col-lg-2 col-sm-4">
            <div className="footer-border-top"><a href="tel:0945538085"><strong>Hire Me!</strong></a></div>
            </div>
            </div>
            </div>
            </section>
        </footer>
      );
    }
  }
export default Footer;
  