import React, { ChangeEvent, DragEvent, memo } from "react";

import { useAppDispatch, useAppSelector } from "../../bll/hooks";
import {
  changeHeader,
  changeImage,
  changePost,
  changeTitle,
  toggleIsHeaderOn,
  toggleIsImageOn,
} from "../../bll/reducer";
import { getState } from "../../bll/selectors";
import { saveDataToLocalStorage } from "../../utils/ls-funcs";
import { Switch } from "../Switch/Switch";

import s from "./Controls.module.scss";

export const Controls = memo(() => {
  const dispatch = useAppDispatch();
  const data = useAppSelector(getState);
  const { post, isHeaderOn, header, title, isImageOn } = data;

  const onTitleChangeHandler = (e: ChangeEvent<HTMLInputElement>) =>
    dispatch(changeTitle(e.currentTarget.value));
  const onPostChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) =>
    dispatch(changePost(e.currentTarget.value));
  const onHeaderChangeHandler = (e: ChangeEvent<HTMLInputElement>) =>
    dispatch(changeHeader(e.currentTarget.value));

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

  const setIsHeaderOn = () => dispatch(toggleIsHeaderOn(isHeaderOn));
  const setIsFileOn = () => dispatch(toggleIsImageOn(isImageOn));

  const saveDataHandler = () => saveDataToLocalStorage(data);

  return (
    <div className={s.controls}>
      <input
        value={title}
        onChange={onTitleChangeHandler}
        placeholder="Title"
        type="text"
      />
      <textarea
        value={post}
        onChange={onPostChangeHandler}
        placeholder="Some post text"
      />
      <Switch isOn={isHeaderOn} onSwitchHandler={setIsHeaderOn} />
      {isHeaderOn && (
        <input
          value={header}
          onChange={onHeaderChangeHandler}
          placeholder="Title"
          type="text"
        />
      )}
      <Switch isOn={isImageOn} onSwitchHandler={setIsFileOn} />
      {isImageOn && <input onDrop={onDropImageHandler} type="file" />}
      <button type="button" onClick={saveDataHandler}>
        Save
      </button>
    </div>
  );
});
