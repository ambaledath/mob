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
      <Switch
        value={showIncomplete}
        onValueChanged={showIncompleteValueChange}
      />

      <div>page 1</div>
    </div>
  );
}
