import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Rout from './components/message/Rout'
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { store } from './components/reducers/chatReduser/InitialStore'

const initialState = {
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

// export const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Provider store={store}>
      <App />
    </Provider>

    {/* <BrowserRouter>
      <Rout />
</BrowserRouter>*/}
  </div>


);


