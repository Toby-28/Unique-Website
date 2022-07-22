import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Styles
import "./assets/tailwind.css";
import Loader from "./components/Loader/Loader";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Suspense fallback={<Loader />}>
      <App />
    </Suspense>
  </React.StrictMode>
);
