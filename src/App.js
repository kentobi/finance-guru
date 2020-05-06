import React from 'react';
import Header from './header/Header';
import './App.css';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

import { Button, Progress } from 'antd';

export const GlobalStateContext = React.createContext("state");

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      // Initial values
      amountMoney: 1,
      amountStones: 40,
    }
  }

  render() {
      return (
      <GlobalStateContext.Provider value={this.state}>
        <div className="App">
            <Header title="Finance Guru" version="0.1.0" />
            <Button type="primary" onClick={() => this.incrementMoney(1)}>increment</Button>
            <Progress percent="50">progress test</Progress>
        </div>
      </GlobalStateContext.Provider>
    );
  }

  incrementMoney(val) {
    this.setState({amountMoney: (this.state.amountMoney + val)});
  }
}