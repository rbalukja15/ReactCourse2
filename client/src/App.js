import React from 'react';
import './App.css';
import NavigationBar from "./components/shared/partials/headers/NavigationBar";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import muiStyles from "./components/styles/mui.styles";
import Item from "./components/items/Item";
import EventHandling from "./components/EventHandling";
import Table from "./components/leksioni9/ReactFragmentsExample";
import RefExample from "./components/leksioni9/ReactRefs";


function App() {

  return (
    <div className="App">
        <ThemeProvider theme={muiStyles.theme}>
            <NavigationBar>
                <RefExample />
                <Item />
                {/*<EventHandling />*/}
                {/*<Table />*/}
            </NavigationBar>
        </ThemeProvider>
    </div>
  );
}

export default App;
