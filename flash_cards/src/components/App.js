import React from 'react';
import HomePage from './HomePage';
import Header from './Header';
import Play from './Play';
import ManageCard from './ManageCard';
import '../style.css'
import { BrowserRouter, Route } from 'react-router-dom';

const App = () => {

  return (
    <div>
    <div>
        <BrowserRouter>
          <div>
            <Header />
            <Route path="/" exact component={HomePage}/>
            <Route path="/play" exact component={Play}/>
            <Route path="/manage" exact component={ManageCard}/>
          </div>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
