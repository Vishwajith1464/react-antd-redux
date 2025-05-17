import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import sampleReducer from './reducers/sampleReducer.js';
import mySaga from './sagas';
import loginReducer from './reducers/loginReducer.js';


const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({ sampleReducer, auth: loginReducer });
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware)); 
sagaMiddleware.run(mySaga);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store = {store}>
      <App />
    </Provider>
  </StrictMode>,
)
