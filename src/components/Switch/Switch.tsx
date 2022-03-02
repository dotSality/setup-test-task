import cross from "../../assets/images/cross.svg";
import ok from "../../assets/images/ok.svg";

import s from "./Switch.module.scss";

type PropsType = {
  isOn: boolean;
  onSwitchHandler: (isSwitched: boolean) => void;
};

export const Switch = ({ onSwitchHandler, isOn }: PropsType) => {
  const switchHandler = () => onSwitchHandler(!isOn);

  const mainClassName = `${s.main} ${isOn ? s.active : ""}`;
  const circleClassName = `${s.circle} ${isOn ? s.active : ""}`;
  const iconClassName = `${s.icon} ${isOn ? s.active : ""}`;

  return (
    <div role="presentation" onClick={switchHandler} className={mainClassName}>
      <div className={circleClassName} />
      <div
        style={{ backgroundImage: `url(${isOn ? ok : cross})` }}
        className={iconClassName}
      />
    </div>
  );
};
