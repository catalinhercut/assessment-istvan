import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { CssBaseline } from "@mui/material";
import { FeatureFlagContext } from "./contexts/FeatureFlagContext";
import { featureFlags } from "./featureFlags";

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <CssBaseline />
    <FeatureFlagContext.Provider value={featureFlags}>
      <App />
    </FeatureFlagContext.Provider>
  </React.StrictMode>
);
