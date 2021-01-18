import React from 'react';
import './App.css';
import NavigationBar from "./components/shared/partials/headers/NavigationBar";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import muiStyles from "./components/styles/mui.styles";
import Item from "./components/items/Item";
import EventHandling from "./components/EventHandling";
import Table from "./components/leksioni9/ReactFragmentsExample";
import RefExample from "./components/leksioni9/ReactRefs";
import { Provider } from 'react-redux';
import store from "./store";

store.dispatch({type: 'GET_ITEMS', payload: { id: 1, name: "mario" }});

function App() {

  return (
      <Provider store={store}>
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
      </Provider>
  );
}

export default App;
