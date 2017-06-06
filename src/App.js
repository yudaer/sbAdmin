import './global.css';

import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar';

import style from './App.css';

class App extends Component {
  render() {
    return (
      <div id={style.wrapper} className={style.content}>
        <div>
          <Header />
        </div>
        <div>
          <Sidebar />
        </div>
        <div id={style.pageWrapper}>
        </div>
      </div>
    );
  }
}

export default App;
