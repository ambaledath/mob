import { createRoot } from "react-dom/client";
import App from "./App";

import themes from "devextreme/ui/themes";
import "devextreme/dist/css/dx.material.blue.light.css";
import "./assets/styles/styles.scss";
import { BrowserRouter } from "react-router-dom";

const root = createRoot(document.getElementById("root")!);
themes.initialized(() =>
  root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
);
