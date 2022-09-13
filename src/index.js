import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Rout from './components/message/Rout'
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
//import { persist, store } from './components/reducers/chatReduser/InitialStore'
import { PersistGate } from 'redux-persist/integration/react';
import { store } from './reduxFirebase/redux/ConfigureStore'
/*const initialState = {
  count: 0
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'plus':
      return {
        ...state,
        count: state.count + 1
      }
    case 'minus':
      return {
        ...state,
        count: state.count - 1
      }
    default:
      return {
        state
      }
  }

}

 export const store = createStore(reducer);
*/
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>

    {/* <BrowserRouter>
      <Rout />
</BrowserRouter>*/}
  </BrowserRouter>


);


