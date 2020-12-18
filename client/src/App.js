import React from 'react';
import './App.css';
import NavigationBar from "./components/shared/partials/headers/NavigationBar";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import muiStyles from "./components/styles/mui.styles";
import Item from "./components/items/Item";


function App() {

  return (
    <div className="App">
        <ThemeProvider theme={muiStyles.theme}>
            <NavigationBar>
                <Item />
            </NavigationBar>
        </ThemeProvider>
    </div>
  );
}

export default App;
