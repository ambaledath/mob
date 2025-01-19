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
  console.log("location.pathname : ", location.pathname);
  const [selectedTab, setSelectedTab] = useState(tabsIconAndText[0]);
  const [tabIndex, setTabIndex] = useState(tabsIconAndText[0].id);

  const onNavigationChanged = useCallback((args) => {
    const tabObj = args.selectedItem || args.addedItems[0];
    setSelectedTab(args.selectedItem || args.addedItems[0]);
    setTabIndex(tabObj.id);
    localStorage.setItem("path", tabObj.path);
    localStorage.setItem("tabindex", tabObj.id);
    navigate(tabObj.path);
  }, []);

  useEffect(() => {
    const path = localStorage.getItem("path");
    const tabindex = localStorage.getItem("tabindex");
    console.log("tabindex : ", tabindex);
    console.log("path : ", path);
    navigate(path);
  }, [navigate, selectedTab]);

  return (
    <header className={"header-component"}>
      <Tabs
        dataSource={tabsIconAndText}
        stylingMode={"secondary"}
        onSelectionChanged={onNavigationChanged}
        selectedIndex={tabIndex}
      />
    </header>
  );
}
