import { useCallback, useEffect, useState } from "react";
import Tabs from "devextreme-react/tabs";
import { useNavigate, useLocation } from "react-router-dom";
import { SelectionChangedEvent } from "devextreme/ui/tabs";
import "./Header.scss";

const tabsIconAndText = [
  {
    id: 0,
    text: "Page 1",
    path: "/page1",
  },
  {
    id: 1,
    text: "Page 2",
    path: "/page2",
  },
  {
    id: 2,
    text: "Page 3",
    path: "/page3",
  },
];

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  const [selectedTab, setSelectedTab] = useState(tabsIconAndText[0]);

  const onNavigationChanged = useCallback((args) => {
    const tabObj = args.selectedItem || args.addedItems[0];
    console.log("tabObj: ", tabObj.path);
    localStorage.setItem("path", tabObj.path);
    setSelectedTab(args.selectedItem || args.addedItems[0]);
  }, []);

  useEffect(() => {
    const path = localStorage.getItem("path");
    console.log("path : ", path);
    navigate(path);
  }, [navigate, selectedTab]);

  return (
    <header className={"header-component"}>
      <Tabs
        dataSource={tabsIconAndText}
        orientation={"horizontal"}
        stylingMode={"secondary"}
        onSelectionChanged={onNavigationChanged}
      />
    </header>
  );
}
