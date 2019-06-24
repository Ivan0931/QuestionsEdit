import React from 'react';
import './App.css';
import {TableQuestions} from './Components/TableQuestions';
import { Provider } from 'react-redux';
import { store } from './redux/StoreConfig';

export const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <TableQuestions />
      </div>
    </Provider>
  );
}
