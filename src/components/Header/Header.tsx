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

  /*useEffect(() => {
    const matchingTab = tabsIconAndText.find((tab) =>
      tab.path.includes(currentPath)
    )?.id;
    setSelectedTab(matchingTab ?? 0);
  }, [currentPath]);*/

  const [selectedTab, setSelectedTab] = useState(tabsIconAndText[0]);

  const onNavigationChanged = useCallback(
    (args) => {
      setSelectedTab(args.selectedItem || args.addedItems[0]);
    },
    [selectedTab]
  );

  useEffect(() => {
    console.log(selectedTab);
    navigate(selectedTab?.path);
  }, [selectedTab]);

  return (
    <header className={"header-component"}>
      <Tabs
        dataSource={tabsIconAndText}
        onSelectionChanged={onNavigationChanged}
        selectedItem={selectedTab}
      />
    </header>
  );
}
