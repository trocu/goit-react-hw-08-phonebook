import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate
        loading={null}
        persistor={persistor}
      >
        <BrowserRouter basename='/goit-react-hw-08-phonebook'>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </StrictMode>
);
