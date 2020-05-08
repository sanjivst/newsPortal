require('./bootstrap');

import React from 'react';
import { render } from 'react-dom';

import Header from './components/Header';
import News from './components/NewsSection';
import Footer from './components/Footer';

render(
    <div>
        <Header />
        <News />
        <Footer />
    </div>, 
    document.getElementById("root"));
