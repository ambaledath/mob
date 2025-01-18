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
  const [selectedTab, setSelectedTab] = useState(
    tabsIconAndText.findIndex((tab) => tab.path === currentPath)
  );

  useEffect(() => {
    const tabIndex = tabsIconAndText.findIndex(
      (tab) => tab.path === currentPath
    );
    setSelectedTab(tabIndex);
  }, [currentPath]);

  const onNavigationChanged = useCallback(
    (args: SelectionChangedEvent) => {
      navigate(args.addedItems[0]?.path ?? "");
    },
    [navigate]
  );

  return (
    <header className={"header-component"}>
      <Tabs
        dataSource={tabsIconAndText}
        orientation={"horizontal"}
        stylingMode={"secondary"}
        selectedIndex={selectedTab}
        onSelectionChanged={onNavigationChanged}
      />
    </header>
  );
}
