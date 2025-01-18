import { HashRouter as Router } from "react-router-dom";
import config from "devextreme/core/config";
import { licenseKey } from "./devextreme-license";
import Content from "./Content";

// Devextreme License
config({ licenseKey });

function App() {
  return <Content />;
}

export default function Root() {
  return (
    <Router>
      <App />
    </Router>
  );
}
