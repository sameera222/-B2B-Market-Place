import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import HomePage from './pages/Homepage';
const App = () => (
  <Provider store={store}>
    <HomePage />
  </Provider>
);
export default App;