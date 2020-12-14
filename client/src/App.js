import React from 'react';
import './App.css';
import NavigationBar from "./components/shared/partials/headers/NavigationBar";
import PassingMethodByReference from "./components/leksioni5/PassingMethodByReference";


function App() {

  return (
    <div className="App">
        <NavigationBar>
            <PassingMethodByReference />
        </NavigationBar>
    </div>
  );
}

export default App;
