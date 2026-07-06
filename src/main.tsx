import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import "./styles.css";

window.addEventListener("unhandledrejection", (event) => {
  const reason = event.reason;
  const message =
    typeof reason === "string"
      ? reason
      : reason instanceof Error
        ? reason.message
        : String(reason ?? "");

  if (message.includes("message channel closed before a response was received")) {
    event.preventDefault();
  }
});

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found");
}

createRoot(rootElement).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
