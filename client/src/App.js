import React from 'react';
import './App.css';
import FirstClassComponent from "./components/FirstClassComponent";

const destructuringObj = {
    name: "Name",
    surname: "Surname",
    details: {
        age: 12,
        address: "Tirana"
    }
}

function App() {

  return (
    <div className="App">
        <FirstClassComponent data={destructuringObj}>
            <h1>Child header</h1>
        </FirstClassComponent>
    </div>
  );
}

export default App;
