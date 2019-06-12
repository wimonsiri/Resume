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
      <Header/>
      <div class="main-content">
        <div class="container-fluid">
        
        <div className="row">
          <div className="col-md-3 d-flex align-items-end">
            <Home data={ this.state.resumeData.main } />
          </div>
          <div className="col-md-3">
            <Experience data={ this.state.resumeData.resume } />
          </div>
          <div class="col-md-3">
          <Skills data={ this.state.resumeData.resume }/>
          <Contact data={ this.state.resumeData.main }/>
          </div>
          <div className="col-md-3">
            <About data={ this.state.resumeData.main } />
          </div>
        </div>
        </div>
      </div>
      <Footer data={ this.state.resumeData.main }/>
    </div>
    );
  }
}

export default App;
