import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// import App from './App';
import Home from './Home';
import About from './About';
import Navi from './Navi';
import Footer from './Footer';
import Contact from './Contact';
import Journey from './Journey';

import { HashRouter as Router, Route } from 'react-router-dom';



import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
    <div>
        <Navi />
        <Router>
            <div>
                <Route exact path="/" component={Home}  />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/journey" component={Journey} />
            </div>
        </Router>
        <Footer />
    </div>
    , document.getElementById('root'));
registerServiceWorker();
