import config from "devextreme/core/config";
import { licenseKey } from "./devextreme-license";
import Content from "./Content";

// Devextreme License
config({ licenseKey });

export default function App() {
  return <Content />;
}
