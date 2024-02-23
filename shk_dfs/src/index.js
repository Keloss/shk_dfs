import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import './index.css'
import Paths from './store/PathStore';

export const Context = createContext(null);


ReactDOM.render(
  <Context.Provider value={{
    paths: new Paths()
  }}>
    <App/>
  </Context.Provider>,
  document.getElementById('root')
);
