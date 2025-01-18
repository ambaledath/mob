import { useCallback, useState } from "react";
import Switch, { SwitchTypes } from "devextreme-react/switch";
import "./page1.scss";

export default function Page1() {
  const [value, setValue] = useState(false);

  const valueChanged = useCallback((e: SwitchTypes.ValueChangedEvent) => {
    setValue(e.value);
  }, []);

  return (
    <div className="page1">
      <div>page 1</div>
      <Switch value={value} onValueChanged={valueChanged} />
    </div>
  );
}
