import ScrollView from "devextreme-react/scroll-view";
import { useRef } from "react";
import { Header } from "../../components";
import { Outlet } from "react-router-dom";
import "./layout.scss";

export default function Layout() {
  const scrollViewRef = useRef<ScrollView>(null);

  return (
    <div className={"side-nav-outer-toolbar"}>
      {<Header />}
      <div className={"container"}>
        <ScrollView ref={scrollViewRef} className={"layout-body with-footer"}>
          <div className={"content"}>
            <Outlet />
          </div>
        </ScrollView>
      </div>
    </div>
  );
}
