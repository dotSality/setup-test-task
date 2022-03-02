import React, { ChangeEvent } from "react";

import { useAppDispatch, useAppSelector } from "../../bll/hooks";
import { changeHeader, toggleIsHeaderOn } from "../../bll/reducer";
import { getHeaderValues } from "../../bll/selectors";
import { Switch } from "../Switch/Switch";

import s from "components/HeaderControl/HeaderControl.module.scss";

export const HeaderControl = () => {
  const dispatch = useAppDispatch();
  const { header, isHeaderOn } = useAppSelector(getHeaderValues);

  const onHeaderChangeHandler = (e: ChangeEvent<HTMLInputElement>) =>
    dispatch(changeHeader(e.currentTarget.value));
  const setIsHeaderOn = () => dispatch(toggleIsHeaderOn(isHeaderOn));

  return (
    <div className={s.container}>
      <Switch isOn={isHeaderOn} onSwitchHandler={setIsHeaderOn} />
      {isHeaderOn && (
        <input
          value={header}
          onChange={onHeaderChangeHandler}
          placeholder="Title"
          type="text"
        />
      )}
    </div>
  );
};
