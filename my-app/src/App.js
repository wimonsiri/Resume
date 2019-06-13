import React from 'react';
import axios from 'axios';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Nav from './components/Menu';
import Footer from './components/Footer';


class App extends React.Component {
  state = {
    resumeData: []
  }
  
  componentDidMount() {
    axios.get( '/resumeData.json' )
    .then(res => {
      const resumeData = res.data;
      this.setState({ resumeData });
    })
  }
  
  render() {
    return(
    <div id="App">
      <div id="outer-container">
        <Nav/>
        <Header/>
        <div id="page-wrap">
          <div className="main-content">
            <div className="container-fluid">
              
              <div className="row">
                <div className="col-lg-3 col-12 d-flex align-items-end">
                  <Home data={ this.state.resumeData.main } />
                </div>
                <div className="col-lg-3 col-md-4 col-sm-4 col-12">
                  <Experience data={ this.state.resumeData.resume } />
                </div>
                <div className="col-lg-6 col-md-8 col-sm-8 col-12">
                  <div className="row">
                    <div className="col-lg-6 col-12">
                      <Skills data={ this.state.resumeData.resume }/>
                      <Contact data={ this.state.resumeData.main }/>
                    </div>
                    <div className="col-lg-6 col-12">
                      <About data={ this.state.resumeData.main } />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
    );
  }
}

export default App;
