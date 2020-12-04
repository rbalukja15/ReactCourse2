import React from 'react';
import './App.css';
import NavigationBar from "./components/shared/partials/headers/NavigationBar";
import Test from "./components/Test";


function App() {

  return (
    <div className="App">
        <NavigationBar>
            <Test />
        </NavigationBar>
    </div>
  );
}

export default App;
