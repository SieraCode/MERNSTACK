import ReactDOM from 'react-dom/client';
import React from 'react';
import { Provider } from 'react-redux';
import store from './state/store';
import ApplicationComponent from './app/Common/appComponent';

// function App(){
//     return(
//         <h1> You should be able to see this</h1>
//     )
// }

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
    <Provider store={store}>
      <ApplicationComponent />
    </Provider>
  );