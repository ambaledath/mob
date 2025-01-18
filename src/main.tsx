import { createRoot } from "react-dom/client";
import App from "./App.tsx";

import themes from "devextreme/ui/themes";
import "devextreme/dist/css/dx.material.blue.light.css";
import "./assets/styles/styles.scss";

const root = createRoot(document.getElementById("root")!);
themes.initialized(() => root.render(<App />));
