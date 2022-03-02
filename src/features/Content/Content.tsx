import React, { memo } from "react";

import { useAppSelector } from "../../bll/hooks";
import { getState } from "../../bll/selectors";
import { Header } from "../../components/Header/Header";

import s from "./Content.module.scss";

export const Content = memo(() => {
  const { header, isHeaderOn, image, title, post, isImageOn } = useAppSelector(getState);
  const isImageShow = image && isImageOn;

  return (
    <div className={s.content}>
      <div className={s.container}>
        {isHeaderOn && <Header title={header} />}
        {isImageShow && <img className={s.image} src={image} alt="Dropped" />}
        <h2 className={s.title}>{title}</h2>
        <h3 className={s.post}>{post}</h3>
      </div>
    </div>
  );
});
