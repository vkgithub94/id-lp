import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import GetStarted from './Components/GetStarted';
export default class App extends Component {
    render() {
        return (
            <div className="app-style">
              <GetStarted />
            </div>
        )
    }
}