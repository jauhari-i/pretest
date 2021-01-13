import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import configureStore from './store/configureStore';
import pages from './pages';
import './App.css';
import AppContextProvider from './context';

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <AppContextProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={pages.Home} />
          </Switch>
        </BrowserRouter>
      </AppContextProvider>
    </Provider>
  );
};

export default App;
