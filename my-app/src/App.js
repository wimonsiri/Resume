import React from 'react';
import axios from 'axios';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Menu from './components/Menu';
import Experience from './components/Experience';


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
      <div className="App">
        <Header/>
        <Home data={ this.state.resumeData.main } />
        <Menu/>
        <About data={ this.state.resumeData.main } />
        <Experience data={ this.state.resumeData.resume } />
      </div>
      );
    }
  }
  
  export default App;
  