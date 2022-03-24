import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";

import Store from "./store";
import App from "./components/App";

ReactDOM.render(
  <React.StrictMode>
    <Store>
      <BrowserRouter>
        <CssBaseline />
        <App />
      </BrowserRouter>
    </Store>
  </React.StrictMode>,
  document.getElementById("root")
);
