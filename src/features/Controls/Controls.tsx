import React, { memo } from "react";

import { useAppSelector } from "../../bll/hooks";
import { getState } from "../../bll/selectors";
import { HeaderControl } from "../../components/HeaderControl/HeaderControl";
import { ImageControl } from "../../components/ImageControl/ImageControl";
import { TextFields } from "../../components/TextFields/TextFields";
import { saveDataToLocalStorage } from "../../utils/ls-funcs";

import s from "./Controls.module.scss";

export const Controls = memo(() => {
  const data = useAppSelector(getState);

  const saveDataHandler = () => saveDataToLocalStorage(data);

  return (
    <div className={s.controls}>
      <TextFields />
      <HeaderControl />
      <ImageControl />
      <button type="button" onClick={saveDataHandler}>
        Save
      </button>
    </div>
  );
});
