import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { appStore } from "./redux/store";
import { RouterProvider } from "react-router-dom";
import appRouter from "./Routing";
import 'bootstrap/dist/css/bootstrap.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={appStore}>
     <RouterProvider router={appRouter} />
   
  </Provider>
);
