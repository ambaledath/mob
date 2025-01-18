import { useState } from "react";
import Switch from "react-switch";
import SwitchToggle from "../../components/Switch/Switch";
import "./page1.scss";

export default function Page1() {
  const [checked, setChecked] = useState(false);

  const valueChanged = () => {
    setChecked(!checked);
  };

  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  console.log(checked);
  return (
    <div className="page1">
      <div>page 1</div>
      <br />
      <Switch
        onChange={valueChanged}
        checked={checked}
        onColor="#86d3ff"
        onHandleColor="#2693e6"
        handleDiameter={30}
        uncheckedIcon={false}
        checkedIcon={false}
        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
        activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
        height={20}
        width={48}
      />
      <br /><br />
      <SwitchToggle isOn={isOn} onToggle={handleToggle} />
      <p>{isOn ? "Switch is ON" : "Switch is OFF"}</p>
    </div>
  );
}
