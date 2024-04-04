import React from 'react';
import Header from './components/Header';
import Feature from './components/Feature';
import About from './components/About';
import Presentation from './components/Presentation';
import aboutimage from './images/about.png';
import aboutimage1 from './images/creator.png';
import Creator from './components/Creator';


function App() {
    return (
        <div className="App">
            <Header/>
            <Feature/>
            <About image={aboutimage} title='Comes With All You Need for Daily Life' button='Repository'/>
            <Presentation/>
            <Creator image={aboutimage1} title='About Me' button='GitHub'/>
        </div>
    );
}

export default App;