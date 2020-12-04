import React from 'react';
import './App.css';
import NavigationBar from "./components/shared/partials/headers/NavigationBar";
import Test from "./components/Test";
import FirstClassComponent from "./components/FirstClassComponent";


function App() {

  return (
    <div className="App">
        <NavigationBar>
            {/*<FirstClassComponent />*/}
            <Test />
        </NavigationBar>
    </div>
  );
}

export default App;
