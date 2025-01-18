import ScrollView from "devextreme-react/scroll-view";
import React, { useRef } from "react";
import { Header } from "../../components";
import type { SideNavToolbarProps } from "../../types";
import "./layout.scss";

export default function Layout({
  children,
}: React.PropsWithChildren<SideNavToolbarProps>) {
  const scrollViewRef = useRef<ScrollView>(null);

  return (
    <div className={"side-nav-outer-toolbar"}>
      {<Header />}
      <div className={"container"}>
        <ScrollView ref={scrollViewRef} className={"layout-body with-footer"}>
          <div className={"content"}>
            {React.Children.map(
              children as React.ReactElement[],
              (item, index) => React.cloneElement(item, { key: index })
            )}
          </div>
        </ScrollView>
      </div>
    </div>
  );
}
