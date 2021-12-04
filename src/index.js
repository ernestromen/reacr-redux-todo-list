import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import { counterReducer } from './reducers/myReducers';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './components/about';
import Home from './components/Home';
import Error from './components/Error';
//Persist
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react'



//Combinig reducers


const allReducers = combineReducers({
  counter:counterReducer,
  });

//Redux persist

  const persistConfig = {
    key: 'root',
    storage,
  }
   
  const persistedReducer = persistReducer(persistConfig, allReducers)


//STORE
const store = createStore(
  persistedReducer,
 window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

);


let persistor = persistStore(store)







ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>

    <BrowserRouter> 
    <Switch> 
    <Route exact   path='/about' component={About} />

    <Route exact  path='/' component={Home} />  

  <Route component={Error} />

       </Switch>     
 
    </BrowserRouter> 
    </PersistGate>

    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
