import React from 'react';
import './App.css';
import NavigationBar from "./components/shared/partials/headers/NavigationBar";
import Test from "./components/Test";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import muiStyles from "./components/styles/mui.styles";


function App() {

  return (
    <div className="App">
        <ThemeProvider theme={muiStyles.theme}>
            <NavigationBar>
                <Test />
            </NavigationBar>
        </ThemeProvider>
    </div>
  );
}

export default App;
