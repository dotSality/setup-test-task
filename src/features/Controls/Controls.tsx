import React, { ChangeEvent, DragEvent, memo } from "react";

import { DataType, saveDataToLocalStorage } from "../../utils/ls-funcs";
import { Switch } from "../Switch/Switch";

import s from "./Controls.module.scss";

type PropsType = {
  state: DataType;
  setState: (data: DataType) => void;
};

export const Controls = memo(({ state, setState }: PropsType) => {
  const setBase64 = (file: File | null) => {
    let baseURL = null;
    const reader = new FileReader();
    if (file) reader.readAsDataURL(file);
    reader.onload = () => {
      baseURL = reader.result as string;
      setState({ ...state, image: baseURL });
    };
  };

  const { post, isHeaderOn, header, title, isFileOn } = state;
  const onTitleChangeHandler = (e: ChangeEvent<HTMLInputElement>) =>
    setState({ ...state, title: e.currentTarget.value });
  const onPostChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) =>
    setState({ ...state, post: e.currentTarget.value });
  const onHeaderChangeHandler = (e: ChangeEvent<HTMLInputElement>) =>
    setState({ ...state, header: e.currentTarget.value });
  const onDropImageHandler = (e: DragEvent<HTMLInputElement>) =>
    setBase64(e.dataTransfer.files.item(0));
  const setIsHeaderOn = () => setState({ ...state, isHeaderOn: !isHeaderOn });
  const setIsFileOn = () => setState({ ...state, isFileOn: !isFileOn });

  const saveDataHandler = () => saveDataToLocalStorage(state);

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
      <Switch isOn={isFileOn} onSwitchHandler={setIsFileOn} />
      {isFileOn && <input onDrop={onDropImageHandler} type="file" />}
      <button type="button" onClick={saveDataHandler}>
        Save
      </button>
    </div>
  );
});
