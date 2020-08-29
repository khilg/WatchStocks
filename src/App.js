import React from 'react';
import './App.css';
import Main from './components/MainComponent'
import {BrowserRouter as Router} from 'react-router-dom'
import { Provider } from 'react-redux'
import {configureStore} from './components/redux/configureStore'

const store = configureStore();

function App() {
  return (
    <Provider store= {store}>
    <Router>
       <Main />
    </Router> 
    </Provider>
  );
}

export default App;
