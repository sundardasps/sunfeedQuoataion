import './index.css'
import App from './App.jsx'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { APIProvider } from '@vis.gl/react-google-maps'
import { store, persistor } from "./redux/store.js";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <APIProvider  apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY }  >
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <App />
    </PersistGate>
    </Provider>
    </APIProvider>
  </React.StrictMode>,
)
