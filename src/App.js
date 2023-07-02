 import './App.css';
import React from 'react';
import {Footer,Blog,Possibility,Features,WGPT3,Header} from './containers';
import {Cta,Brand,Navbar, Feature} from './components'

function App() {
  return (
    <div className="App">
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WGPT3 />
      <Feature />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
