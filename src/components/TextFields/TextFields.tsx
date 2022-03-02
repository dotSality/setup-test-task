import React, { ChangeEvent } from "react";

import { useAppDispatch, useAppSelector } from "../../bll/hooks";
import { changePost, changeTitle } from "../../bll/reducer";
import { getTextValues } from "../../bll/selectors";

import s from "components/TextFields/TextFields.module.scss";

export const TextFields = () => {
  const { post, title } = useAppSelector(getTextValues);
  const dispatch = useAppDispatch();
  const onTitleChangeHandler = (e: ChangeEvent<HTMLInputElement>) =>
    dispatch(changeTitle(e.currentTarget.value));
  const onPostChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) =>
    dispatch(changePost(e.currentTarget.value));

  return (
    <div className={s.container}>
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
    </div>
  );
};
