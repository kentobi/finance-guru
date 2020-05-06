import React from 'react';
import './App.css';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

import { Button, Progress } from 'antd';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button type="primary">increment</Button>
        <Progress percent="50">progress test</Progress>
      </header>
    </div>
  );
}

export default App;
