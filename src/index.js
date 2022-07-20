import React from 'react';
import ReactDOM from 'react-dom/client';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from './reducers'

import './index.css';
import App from './components/App';
// import movies from './reducers'

//this is the curried version of the logger (obj , next , action)
// logger(obj)(next)(action)
 
// const logger = function ({dispatch , getState}){
//     return function (next){
//       return function(action){
//         //middleware code
//         console.log('ACTION_TYPE =' , action.type);
//         next(action);
//       }
//     }
// }

const logger = ({dispatch , getState}) => (next) => (action) => {
//logger code
  console.log('ACTION_TYPE =' , action.type);
  next(action);
}

// const store = createStore(movies);
const store = createStore(rootReducer , applyMiddleware(logger));
console.log('store' , store);
// console.log('BEFORE STATE' , store.getState());


// store.dispatch({
//   type: 'ADD_MOVIES' ,
//   movies: [{name: 'Superman'}]
// })
// console.log('AFTER STATE' , store.getState());



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App store={store}/>
  </React.StrictMode>
);
