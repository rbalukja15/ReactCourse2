import React from 'react';
import './App.css';
import FirstClassComponent from "./components/FirstClassComponent";

function App() {

    const nameKeys = ['First', 'Second', 'Third'];

  return (
    <div className="App">
        {nameKeys.map((name, index) => <FirstClassComponent key={index} nameKey={name} />)}
    </div>
  );
}

export default App;
