import { Routes, Route } from "react-router-dom";
import { Page1, Page2, Page3 } from "./pages";
import Layout from "./components/Layout/Layout";

export default function Content() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route exact path="/" element={<Page1 />} />
        <Route exact path="/page1" element={<Page1 />} />
        <Route exact path="/page2" element={<Page2 />} />
        <Route exact path="/page3" element={<Page3 />} />
      </Route>
    </Routes>
  );
}
