import React from 'react';
import './App.css';
import NavigationBar from "./components/shared/partials/headers/NavigationBar";
import MethodBinding from "./components/leksioni5/MethodBinding";


function App() {

  return (
    <div className="App">
        <NavigationBar>
            <MethodBinding />
        </NavigationBar>
    </div>
  );
}

export default App;
