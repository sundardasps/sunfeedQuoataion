import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { APIProvider } from '@vis.gl/react-google-maps'
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store.js";
import { PersistGate } from "redux-persist/integration/react";

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
