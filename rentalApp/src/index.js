import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import App from "./main-component/App/App";
import "./index.css";
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import rootReducer from "./redux/reducers/rootReducer";
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import persistedReducer from "./redux/reducers/rootReducer";
import 'semantic-ui-css/semantic.min.css'

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ["en", "fr", "pt"],
    fallbackLng: "en",
    detection: {
      order: ["htmlTag", "cookie", "localStorage", "path", "subdomain"],
      caches: ["cookie"],
    },
    backend: {
      loadPath: "/assets/locales/{{lng}}/translation.json",
    },
  });

const loadingMarkup = <div className="py-4 text-center"></div>;
const store = createStore(persistedReducer);
const persistor = persistStore(store)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Suspense fallback={loadingMarkup}>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </Suspense>
    </PersistGate>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
