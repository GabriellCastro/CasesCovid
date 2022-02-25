import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { CasesProvider } from './context/CasesProvider';

ReactDOM.render(
  <CasesProvider>
    <App />
  </CasesProvider>,
  document.getElementById('root')
);
