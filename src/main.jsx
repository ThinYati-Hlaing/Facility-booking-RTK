import { createRoot } from "react-dom/client";
import "./style/index.css";
import App from "./App";
import React from "react";
import FrameProvider from "./provider/FrameProvider";

createRoot(document.getElementById("root")).render(
  <FrameProvider>
    <App />
  </FrameProvider>
);
