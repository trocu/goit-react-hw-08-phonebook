import './index.css';
import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import App from './App.jsx';
import { store } from './redux/store';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter basename='/goit-react-hw-08-phonebook'>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
