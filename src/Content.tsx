import { Routes, Route } from "react-router-dom";
import appInfo from "./app-info";
import { Page1, Page2, Page3 } from "./pages";
import Layout from "./components/Layout/Layout";

export default function Content() {
  return (
    <Layout title={appInfo.title}>
      <Routes>
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
        <Route path="*" element={<Page1 />} />
      </Routes>
    </Layout>
  );
}
