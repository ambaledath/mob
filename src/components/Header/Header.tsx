import { useCallback, useEffect, useState } from "react";
import Tabs from "devextreme-react/tabs";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { SelectionChangedEvent } from "devextreme/ui/tabs";
import "./Header.scss";

const tabsIconAndText = [
  {
    id: 0,
    text: "Page 1",
    icon: "like",
    path: "/page1",
  },
  {
    id: 1,
    text: "Page 2",
    icon: "taskcomplete",
    path: "/page2",
  },
  {
    id: 2,
    text: "Page 3",
    icon: "taskstop",
    path: "/page3",
  },
];

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const currentPath = location.pathname;
  const [selectedTab, setSelectedTab] = useState<number>(0);

  useEffect(() => {
    const matchingTab = tabsIconAndText.find((tab) =>
      tab.path.includes(currentPath)
    )?.id;
    setSelectedTab(matchingTab ?? 0);
  }, [currentPath]);

  const onNavigationChanged = useCallback(
    (args: SelectionChangedEvent) => {
      navigate(args.addedItems[0]?.path ?? "");
    },
    [navigate]
  );

  return (
    <header className={"header-component"}>
      <nav>
        <Link to="/">Page 1</Link>
        <Link to="/page2">Page 2</Link>
        <Link to="/page3">Page 3</Link>
      </nav>
      {/* 
      <Tabs
        id="specialist-nav-menu"
        width={"100%"}
        defaultSelectedIndex={0}
        dataSource={tabsIconAndText}
        orientation={"horizontal"}
        iconPosition={"top"}
        stylingMode={"secondary"}
        selectedIndex={selectedTab}
        onSelectionChanged={onNavigationChanged}
      />
      */}
    </header>
  );
}
