import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import GetStarted from './Components/GetStarted';
import { BrowserRouter } from 'react-router-dom';
export default class App extends Component {
    render() {
        return (
            <div className="app-style">
              <GetStarted />
            </div>
        )
    }
}
