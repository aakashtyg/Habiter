import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import { App } from './components';
import { configureStore } from './store';

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

window.store = store;
// {
//   habits: [
//     {
//       name: 'Read a book',
//       id: '12k3jn1kjnjnk',
//       done: true,
//       timestamp: ''
//     }
//   ],
//   user: {
//     name: 'Aakash',
//     email: 'someemail@email.com',

//   },
//   progress: {}
// }
