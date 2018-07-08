import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import App from './App';
import ScrollToTop from './scrolltotop.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
  <ScrollToTop>
      <App />
      </ScrollToTop>
  </BrowserRouter>,
  document.getElementById('root')
);
registerServiceWorker();