import { useCallback, useState } from "react";
import Toolbar, { Item } from "devextreme-react/toolbar";
import Switch, { SwitchTypes } from "devextreme-react/switch";
import "./page1.scss";

export default function Page1() {
  const [showIncomplete, setShowIncomplete] = useState(false);

  const showIncompleteValueChange = useCallback(
    (e: SwitchTypes.ValueChangedEvent) => {
      setShowIncomplete(e.value);
    },
    []
  );

  return (
    <div className="page1">
      <Toolbar style={{ marginTop: "3px" }}>
        <Item location="before" locateInMenu="never" text={"toggle"} />
        <Item location="after">
          <Switch
            value={showIncomplete}
            onValueChanged={showIncompleteValueChange}
          />
        </Item>
      </Toolbar>
      <div>page 1</div>
    </div>
  );
}
