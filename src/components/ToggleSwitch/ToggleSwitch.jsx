import { useEffect, useState } from "react";
import "./ToggleSwitch.css";
import { useContext } from "react";
import CurrentTempUnitContext from "../../contexts/CurrentTempUnitContext.js";

function ToggleSwitch() {
  const contextValue = useContext(CurrentTempUnitContext);
  //lift this state and distribute it via a context
  // const [tempUnit, setTempUnit] = useState("F");

  // function handleChange() {
  //   setTempUnit("C");
  //   if (tempUnit == "F") {
  //     setTempUnit("C");
  //   } else {
  //     setTempUnit("F");
  //   }
  // }
  // useEffect(() => {
  //   console.log(tempUnit);
  // });

  return (
    <label htmlFor="toggle-switch" className="toggle-switch">
      <input
        id="toggle-switch"
        type="checkbox"
        className="toggle-switch__checkbox"
        onChange={contextValue.handleToggleSwitchChange}
      />
      <span className="toggle-switch__circle"></span>
      <span className="toggle-switch__value toggle-switch__value_left">F</span>
      <span className="toggle-switch__value toggle-switch__value_right">C</span>
    </label>
  );
}

export default ToggleSwitch;
