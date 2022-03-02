import React, { DragEvent } from "react";

import { useAppDispatch, useAppSelector } from "../../bll/hooks";
import { changeImage, toggleIsImageOn } from "../../bll/reducer";
import { getIsImageOn } from "../../bll/selectors";
import { Switch } from "../Switch/Switch";

import s from "components/ImageControl/ImageControl.module.scss";

export const ImageControl = () => {
  const dispatch = useAppDispatch();
  const isImageOn = useAppSelector(getIsImageOn);

  const getBase64 = (file: File | null) => {
    let baseURL = null;
    const reader = new FileReader();
    if (file) reader.readAsDataURL(file);
    reader.onload = () => {
      baseURL = reader.result as string;
      dispatch(changeImage(baseURL));
    };
  };
  const onDropImageHandler = (e: DragEvent<HTMLInputElement>) => {
    getBase64(e.dataTransfer.files.item(0));
  };

  const setIsFileOn = () => dispatch(toggleIsImageOn(isImageOn));

  return (
    <div className={s.container}>
      <Switch isOn={isImageOn} onSwitchHandler={setIsFileOn} />
      {isImageOn && <input onDrop={onDropImageHandler} type="file" />}
    </div>
  );
};
