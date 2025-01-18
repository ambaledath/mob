import { Routes, Route } from "react-router-dom";
import { Page1, Page2, Page3 } from "./pages";
import Layout from "./components/Layout/Layout";

export default function Content() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Page1 />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
        <Route path="*" element={<Page1 />} />
      </Route>
    </Routes>
  );
}
