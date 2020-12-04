import React from 'react';
import './App.css';
import NavigationBar from "./components/shared/partials/headers/NavigationBar";
import Test from "./components/Test";


function App() {

  return (
    <div className="App">
        <NavigationBar>
            <Test name={"Name"} surname={"Surname"} age={20}/>
            <Test />
        </NavigationBar>
    </div>
  );
}

export default App;
